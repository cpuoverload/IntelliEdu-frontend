import { useEffect, useState, useCallback, useMemo } from "react";
import {
  Avatar,
  Flex,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import type { DataTableColumn, DataTableSortStatus } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import formatDate from "@/utils/formatDate";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";

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
        render: (record) => (
          <Avatar
            src={record.avatar}
            name={record.nickname || record.username}
            color="initials"
            mx="auto"
          />
        ),
      },
      { accessor: "role", width: "120px", sortable: true },
      {
        accessor: "createTime",
        width: "190px",
        sortable: true,
        render: (record) => formatDate(record.createTime!),
      },
      {
        accessor: "updateTime",
        width: "190px",
        sortable: true,
        render: (record) => formatDate(record.updateTime!),
      },
      {
        accessor: "actions",
        width: "0%",
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

  return (
    <>
      <Flex justify="space-between" align="center">
        <Group gap="lg">
          {/* todo: debounce */}
          <NumberInput
            // 这个组件在 value prop 是 string 类型时，有不少问题，用 number 类型了
            value={requestParams.id ?? ""}
            // 当 value prop 为数字类型时，清空输入框，value 会变为空字符串类型，这是符合预期的行为，不然没办法判断是否清空输入框
            // https://github.com/mantinedev/mantine/issues/6648#issuecomment-2277645510
            onChange={(val) => {
              // 当 val 为字符串类型时（空串），blur 时会再次触发 onChange，可能是个 bug，这里临时解决下
              if (val === "" && requestParams.id === undefined) {
                return;
              }
              setRequestParams((prev) => ({
                ...prev,
                id: val === "" ? undefined : (val as number),
              }));
            }}
            placeholder="Id"
            allowNegative={false}
            allowDecimal={false}
          />
          <TextInput
            // 使用受控组件时，value 不能为 undefined
            value={requestParams.username ?? ""}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setRequestParams((prev) => ({
                ...prev,
                username: value || undefined, // 在此处通过 event.currentTarget.value 获取值可能空指针异常
              }));
            }}
            placeholder="Username"
          />
          <TextInput
            value={requestParams.nickname ?? ""}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setRequestParams((prev) => ({
                ...prev,
                nickname: value || undefined,
              }));
            }}
            placeholder="Nickname"
          />
          <Select
            // 未选择用 null 表示，不能用 undefined
            value={requestParams.role ?? null}
            onChange={(val) => {
              setRequestParams((prev) => ({
                ...prev,
                role: val ?? undefined,
              }));
            }}
            data={["user", "admin"]}
            placeholder="Role"
            clearable
          />
        </Group>
        <CreateUserButton fetchData={fetchData} />
      </Flex>

      <DataTable<API.UserVo>
        // 用哪列作为 map 使用的 key
        idAccessor="id"
        withTableBorder
        minHeight={150}
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
