import { useEffect, useState } from "react";
import { AppShell } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { listUser } from "@/services/api/userController";
import CreateUserButton from "./CreateUserButton";

const Index = () => {
  const [data, setData] = useState<API.UserVo[]>([]);
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
          setData(data!);
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
    <AppShell.Main>
      <CreateUserButton getUserList={getUserList} />
      <DataTable
        withTableBorder
        minHeight={150}
        shadow="sm"
        withColumnBorders
        highlightOnHover
        fz="md"
        fetching={loading}
        columns={[
          { accessor: "id" },
          { accessor: "username" },
          { accessor: "nickname" },
          { accessor: "role" },
        ]}
        records={data}
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
    </AppShell.Main>
  );
};

export default Index;
