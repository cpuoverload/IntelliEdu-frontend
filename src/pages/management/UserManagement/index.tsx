import { useEffect, useState } from "react";
import { Group } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import CreateUserButton from "./CreateUserButton";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";

const Index = () => {
  const [records, setRecords] = useState<API.UserVo[]>([]);
  const [loading, setLoading] = useState(true);

  const getUserList = (config: API.ListRequest) => {
    const { current = 1, pageSize = 50 } = config;

    setLoading(true);

    listUser({
      current,
      pageSize,
    })
      .then((res) => {
        const { code, data } = res.data;
        if (code === 0) {
          setRecords(data!);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUserList({});
  }, []);

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
        // todo 实现分页功能，需要后端改造响应体结构，增加 totalRecords 字段
        // recordsPerPage={1}
        // totalRecords={4}
        // page={1}
        // onPageChange={(page) => {
        //   getUserList({ current: page, pageSize: 20 });
        // }}
        // paginationText={({ from, to, totalRecords }) =>
        //   `Records ${from} - ${to} of ${totalRecords}`
        // }
      />
    </>
  );
};

export default Index;
