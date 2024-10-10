import { useEffect, useState, useCallback, useMemo } from "react";
import {
  Avatar,
  Badge,
  Flex,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useDebouncedCallback } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import type { DataTableColumn, DataTableSortStatus } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import formatDate from "@/utils/formatDate";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";
import debounceTime from "@/const/debounce";

const Index = () => {
  const [requestParams, setRequestParams] = useState<API.ListRequest>({
    current: 1,
    pageSize: 10,
    sortField: undefined,
    isAscend: undefined,
    id: undefined,
    username: undefined,
    nickname: undefined,
    role: undefined,
  });
  const [records, setRecords] = useState<API.UserVo[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // @ts-expect-error DataTable类型不支持默认不排序，但实际可以
  const sortStatus = useMemo<DataTableSortStatus<API.UserVo>>(() => {
    if (!requestParams.sortField) return undefined;
    return {
      columnAccessor: requestParams.sortField,
      direction: requestParams.isAscend ? "asc" : "desc",
    };
  }, [requestParams.sortField, requestParams.isAscend]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await listUser(requestParams);
      const { code, data } = res.data;
      if (code === 0) {
        setRecords(data?.records || []);
        setTotal(data?.total || 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [requestParams]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams]);

  const columns = useMemo<DataTableColumn<API.UserVo>[]>(
    () => [
      { accessor: "id", width: "100px", sortable: true },
      { accessor: "username", width: "150px", ellipsis: true, sortable: true },
      { accessor: "nickname", width: "150px", ellipsis: true, sortable: true },
      {
        accessor: "avatar",
        width: "120px",
        textAlign: "center",
        render: (record) => (
          <Avatar
            src={record.avatar}
            name={record.nickname}
            color={record.nickname ? "initials" : undefined}
            size={45}
            mx="auto"
          />
        ),
      },
      {
        accessor: "role",
        width: "120px",
        sortable: true,
        textAlign: "center",
        render: (record) => (
          <Badge
            variant="light"
            color={record.role === "admin" ? "orange" : "gray"}
          >
            {record.role}
          </Badge>
        ),
      },
      {
        accessor: "createTime",
        width: "190px",
        sortable: true,
        textAlign: "center",
        render: (record) => formatDate(record.createTime!),
      },
      {
        accessor: "updateTime",
        width: "190px",
        sortable: true,
        textAlign: "center",
        render: (record) => formatDate(record.updateTime!),
      },
      {
        accessor: "actions",
        textAlign: "center",
        width: "120px", // 根据文档可以设置 "0%" 来自动设置宽度，但 Safari 似乎有问题
        render: (record) => (
          <Group gap={20} wrap="nowrap">
            <UpdateUserButton record={record} fetchData={fetchData} />
            <DeleteUserButton record={record} fetchData={fetchData} />
          </Group>
        ),
      },
    ],
    [fetchData]
  );

  // 用非受控组件，更容易实现部分筛选 debounce
  // 如果用受控组件，需要额外定义输入框的状态，否则难以实现部分筛选用 debounce，部分筛选或分页不使用 debounce
  const filterId = useDebouncedCallback((val: string | number) => {
    setRequestParams((prev) => ({
      ...prev,
      id: val === "" ? undefined : (val as number),
      current: 1,
    }));
  }, debounceTime);

  const filterUsername = useDebouncedCallback((value: string) => {
    setRequestParams((prev) => ({
      ...prev,
      username: value || undefined,
      current: 1,
    }));
  }, debounceTime);

  const filterNickname = useDebouncedCallback((value: string) => {
    setRequestParams((prev) => ({
      ...prev,
      nickname: value || undefined,
      current: 1,
    }));
  }, debounceTime);

  const filterRole = (val: string | null) => {
    setRequestParams((prev) => ({
      ...prev,
      role: val ?? undefined,
      current: 1,
    }));
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Group gap="lg">
          <NumberInput
            // 这个组件在 value prop 是 string 类型时，有不少问题，用 number 类型了
            // 当 value prop 为数字类型时，清空输入框，value 会变为空字符串类型，这是符合预期的行为，不然没办法判断是否清空输入框
            // https://github.com/mantinedev/mantine/issues/6648#issuecomment-2277645510
            placeholder="Id (number)"
            onChange={(val) => {
              // 当 val 为字符串类型时，blur 时会再次触发 onChange，可能是个 bug，这里临时解决下
              // 清空时会变为空串
              if (val === "" && requestParams.id === undefined) {
                return;
              }
              // 当 val 值较大时，会自动转换为字符串类型
              if (
                typeof val === "string" &&
                typeof requestParams.id === "string" &&
                val === requestParams.id
              ) {
                return;
              }
              filterId(val);
            }}
            allowNegative={false}
            allowDecimal={false}
            hideControls
          />
          <TextInput
            placeholder="Username"
            onChange={(event) => {
              filterUsername(event.currentTarget.value);
            }}
          />
          <TextInput
            placeholder="Nickname"
            onChange={(event) => {
              filterNickname(event.currentTarget.value);
            }}
          />
          <Select
            placeholder="Role"
            data={["admin", "user"]}
            onChange={filterRole}
            clearable
          />
        </Group>
        <CreateUserButton fetchData={fetchData} />
      </Flex>

      <DataTable<API.UserVo>
        // 用哪列作为 map 使用的 key
        idAccessor="id"
        withTableBorder
        // minHeight={180}
        // 设置高度可以使表格竖直滚动，minHeight 会失效
        // 表格最后一行无 border bottom，作者认为符合默认行为，不好调，放弃
        height={685}
        shadow="sm"
        withColumnBorders
        highlightOnHover
        mt={20}
        fetching={loading}
        pinLastColumn
        columns={columns}
        records={records}
        recordsPerPage={requestParams.pageSize!}
        totalRecords={total}
        page={requestParams.current!}
        onPageChange={(page) => {
          setRequestParams((prev) => ({ ...prev, current: page }));
        }}
        recordsPerPageOptions={[10, 20, 30, 50]}
        onRecordsPerPageChange={(size) => {
          setRequestParams((prev) => ({ ...prev, pageSize: size, current: 1 }));
        }}
        paginationText={({ from, to, totalRecords }) =>
          `Records ${from} - ${to} of ${totalRecords}`
        }
        sortStatus={sortStatus}
        onSortStatusChange={(sort) => {
          setRequestParams((prev) => ({
            ...prev,
            sortField: sort.columnAccessor,
            isAscend: sort.direction === "asc",
          }));
        }}
      />
    </>
  );
};

export default Index;
