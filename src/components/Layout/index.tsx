import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import NavBar from "@/components/NavBar";

const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <NavBar />
      </AppShell.Header>
      <AppShell.Main style={{ padding: "100px 200px 50px 200px" }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
