import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Button, Group, NavLink } from "@mantine/core";
import cx from "clsx";
import useStore from "@/store/store";
import { navRoutes } from "@/routes/router";
import Avatar from "../Avatar";
import styles from "./style.module.less";

const Navbar = () => {
  const loginUser = useStore((state) => state.loginUser);

  return (
    <Group h="100%" px="md">
      IntelliEdu
      {navRoutes
        .filter(
          (route) =>
            !route.role || (!!loginUser && route.role.includes(loginUser.role!))
        )
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
              Login
            </Button>
            <Button variant="default" component={Link} to="/register">
              Register
            </Button>
          </Group>
        )}
      </div>
    </Group>
  );
};

export default Navbar;
