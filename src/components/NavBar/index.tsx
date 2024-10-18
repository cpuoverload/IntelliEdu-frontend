import { NavLink as RouterNavLink } from "react-router-dom";
import { Box, NavLink } from "@mantine/core";
import cx from "clsx";
import useStore from "@/store/store";
import { navRoutes } from "@/routes/router";
import styles from "./style.module.less";

const Navbar = () => {
  const loginUser = useStore((state) => state.loginUser);

  // Active Link Styling
  // https://reactrouter.com/en/main/start/tutorial#active-link-styling

  // mantine Polymorphic components incompatible solving
  // https://mantine.dev/guides/polymorphic/#polymorphic-components-with-react-router-navlink

  return (
    <Box className={styles.container}>
      {navRoutes
        .filter(
          (route) =>
            !route.role || (!!loginUser && route.role.includes(loginUser.role!))
        )
        .map((route) => (
          <NavLink
            key={route.name}
            renderRoot={({ className, ...others }) => (
              <RouterNavLink
                className={({ isActive }) =>
                  cx(
                    className,
                    { [styles["active-router"]]: isActive },
                    styles.link
                  )
                }
                to={route.path ?? "/"}
                {...others}
              >
                {route.name}
              </RouterNavLink>
            )}
          />
        ))}
    </Box>
  );
};

export default Navbar;
