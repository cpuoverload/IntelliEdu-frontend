import { useEffect, useState, useCallback, useMemo } from "react";
import { Avatar, Group } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import type { DataTableColumn } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import formatDate from "@/utils/formatDate";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";

const Index = () => {
  const [records, setRecords] = useState<API.UserVo[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await listUser({
        current,
        pageSize,
      });
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
  }, [current, pageSize]);

  useEffect(() => {
    fetchData();
  }, [current, pageSize]);

  const columns = useMemo<DataTableColumn<API.UserVo>[]>(
    () => [
      { accessor: "id" },
      { accessor: "username" },
      { accessor: "nickname" },
      {
        accessor: "avatar",
        render: (record) => (
          <Avatar
            src={record.avatar}
            name={record.nickname || record.username}
            color="initials"
            mx="auto"
          />
        ),
      },
      { accessor: "role" },
      {
        accessor: "createTime",
        render: (record) => formatDate(record.createTime!),
      },
      {
        accessor: "updateTime",
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
        recordsPerPage={pageSize}
        totalRecords={total}
        page={current}
        onPageChange={(page) => {
          setCurrent(page);
        }}
        recordsPerPageOptions={[10, 20, 30, 50]}
        onRecordsPerPageChange={(size) => {
          setPageSize(size);
          setCurrent(1);
        }}
        paginationText={({ from, to, totalRecords }) =>
          `Records ${from} - ${to} of ${totalRecords}`
        }
      />
    </>
  );
};

export default Index;
