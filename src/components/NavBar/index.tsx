import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { AppShell, Button, Group, NavLink } from "@mantine/core";
import cx from "clsx";
import useStore from "@/store/store";
import { navRoutes } from "@/routes/router";
import Avatar from "../Avatar";
import styles from "./style.module.less";

const Navbar = () => {
  const loginUser = useStore((state) => state.loginUser);

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        IntelliEdu
        {navRoutes
          .filter((route) => {
            return !route.role || route.role.includes(loginUser?.role);
          })
          .map((route) => (
            // Active Link Styling
            // https://reactrouter.com/en/main/start/tutorial#active-link-styling
            // mantine Polymorphic components incompatible solving
            // https://mantine.dev/guides/polymorphic/#polymorphic-components-with-react-router-navlink
            <NavLink
              key={route.name}
              style={{ width: "auto" }}
              renderRoot={({ className, ...others }) => (
                <RouterNavLink
                  className={({ isActive }) =>
                    cx(className, { [styles["active-router"]]: isActive })
                  }
                  to={route.path ?? "/"}
                  {...others}
                >
                  {route.name}
                </RouterNavLink>
              )}
            />
          ))}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          {loginUser ? (
            <Avatar />
          ) : (
            <Group>
              <Button variant="default" component={Link} to="/login">
                登录
              </Button>
              <Button variant="default" component={Link} to="/register">
                注册
              </Button>
            </Group>
          )}
        </div>
      </Group>
    </AppShell.Header>
  );
};

export default Navbar;
