import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { AppShell, Button, Group, NavLink } from "@mantine/core";
import cx from "clsx";
import useStore from "@/store/store";
import styles from "./style.module.less";

const Navbar = () => {
  const loginUser = useStore((state) => state.loginUser);

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        IntelliEdu
        {/* Active Link Styling */}
        {/* https://reactrouter.com/en/main/start/tutorial#active-link-styling */}
        {/* mantine Polymorphic components incompatible solving */}
        {/* https://mantine.dev/guides/polymorphic/#polymorphic-components-with-react-router-navlink */}
        <NavLink
          style={{ width: "auto" }}
          variant="subtle"
          renderRoot={({ className, ...others }) => (
            <RouterNavLink
              // 即使没有使用 isActive，也会因为 React Router NavLink 给元素添加 aria-current="page" 属性，且 mantine 有相应的 CSS，从而高亮
              // 但这不是正常的做法，还是要通过 isActive 控制高亮
              className={({ isActive }) =>
                cx(className, { [styles["active-router"]]: isActive })
              }
              to="/"
              {...others}
            >
              主页
            </RouterNavLink>
          )}
        />
        <NavLink
          style={{ width: "auto" }}
          variant="subtle"
          renderRoot={({ className, ...others }) => (
            <RouterNavLink
              className={({ isActive }) =>
                cx(className, { [styles["active-router"]]: isActive })
              }
              to="/user-management"
              {...others}
            >
              用户管理
            </RouterNavLink>
          )}
        />
        <div
          style={{
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          {loginUser ? (
            // <UserAvatar />
            <>登录头像</>
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
