import { useMemo } from "react";
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
import type { DataTableColumn } from "mantine-datatable";
import AdminTable from "@/components/AdminTable";
import useTable from "@/components/AdminTable/useTable";
import { listUser } from "@/services/user/userController";
import formatDate from "@/utils/formatDate";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";
import debounceTime from "@/const/debounce";
import useStore from "@/store/store";

const Index = () => {
  const initialRequestParams = {
    current: 1,
    pageSize: 10,
    sortField: undefined,
    isAscend: undefined,
    id: undefined,
    username: undefined,
    nickname: undefined,
    role: undefined,
  };

  const {
    requestParams,
    setRequestParams,
    fetchData,
    records,
    total,
    loading,
  } = useTable<User.ListUserRequest, User.UserVo>(
    listUser,
    initialRequestParams
  );

  const loginUser = useStore((state) => state.loginUser);

  const columns = useMemo<DataTableColumn<User.UserVo>[]>(
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
            <DeleteUserButton
              record={record}
              fetchData={fetchData}
              disabled={record.id === loginUser!.id}
            />
          </Group>
        ),
      },
    ],
    [fetchData, loginUser]
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

      <AdminTable<User.ListUserRequest, User.UserVo>
        requestParams={requestParams}
        setRequestParams={setRequestParams}
        fetchData={fetchData}
        records={records}
        total={total}
        loading={loading}
        columns={columns}
      />
    </>
  );
};

export default Index;
