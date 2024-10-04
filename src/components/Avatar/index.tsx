import { forwardRef } from "react";
import { Avatar, Menu, rem } from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "@/store/store";
import { logout } from "@/services/api/userController";
import notification from "@/utils/notification";

const Index = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const navigate = useNavigate();

    const loginUser = useStore((state) => state.loginUser);
    const removeUser = useStore((state) => state.removeUser);

    return (
      <Menu withArrow width={250} position="bottom">
        <Menu.Target>
          <Avatar
            ref={ref}
            name={loginUser!.nickname || loginUser!.username}
            color="initials"
            style={{ cursor: "pointer" }}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>{loginUser!.nickname || loginUser!.username}</Menu.Label>
          <Menu.Item
            component={Link}
            to="/profile"
            leftSection={
              <IconUserCircle style={{ width: rem(16), height: rem(16) }} />
            }
          >
            个人资料
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            onClick={async () => {
              try {
                const res = await logout();
                const { code, message } = res.data;
                if (code == 0) {
                  notification.success("已退出登录");
                  // 在导航到主页后，再移除用户信息，防止 RequireAuth 组件重定向到登录页
                  setTimeout(() => {
                    removeUser();
                  }, 100);
                  navigate("/");
                } else {
                  notification.fail(message!);
                }
              } catch (error) {
                notification.fail("请求错误");
                console.error(error);
              }
            }}
          >
            注销
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }
);

export default Index;
