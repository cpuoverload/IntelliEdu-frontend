import { useEffect, useState, useCallback } from "react";
import { Group } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";

const Index = () => {
  const [records, setRecords] = useState<API.UserVo[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const getUserList = useCallback(() => {
    setLoading(true);
    listUser({
      current,
      pageSize,
    })
      .then((res) => {
        const { code, data } = res.data;
        if (code === 0) {
          setRecords(data?.records || []);
          setTotal(data?.total || 0);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [current, pageSize]);

  useEffect(() => {
    getUserList();
  }, [current, pageSize]);

  return (
    <>
      <Group justify="flex-end">
        <CreateUserButton getUserList={getUserList} />
      </Group>
      <DataTable
        // 用哪列作为 map 使用的 key
        idAccessor="id"
        withTableBorder
        minHeight={150}
        shadow="sm"
        withColumnBorders
        highlightOnHover
        fz="md"
        mt={20}
        fetching={loading}
        pinLastColumn
        columns={[
          { accessor: "id" },
          { accessor: "username" },
          { accessor: "nickname" },
          { accessor: "role" },
          {
            accessor: "actions",
            width: "0%",
            render: (record) => (
              <Group gap={20} wrap="nowrap">
                <UpdateUserButton record={record} getUserList={getUserList} />
                <DeleteUserButton record={record} getUserList={getUserList} />
              </Group>
            ),
          },
        ]}
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
