import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import NavBar from "@/components/NavBar";

const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <NavBar />
      <Outlet />
    </AppShell>
  );
};

export default Layout;
