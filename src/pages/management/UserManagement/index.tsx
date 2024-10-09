import { useEffect, useState, useCallback, useMemo } from "react";
import { Avatar, Group } from "@mantine/core";
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
      <Group justify="flex-end">
        <CreateUserButton fetchData={fetchData} />
      </Group>
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
