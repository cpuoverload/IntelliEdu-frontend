import { forwardRef } from "react";
import { Avatar, Menu, rem } from "@mantine/core";
import { IconLogout, IconUserCircle, IconLanguage } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ROUTES from "@/routes";
import useStore from "@/store/store";
import { logout } from "@/services/api/userController";
import notification from "@/utils/notification";

const Index = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const loginUser = useStore((state) => state.loginUser);
    const removeUser = useStore((state) => state.removeUser);

    return (
      <Menu withArrow width={250} position="bottom">
        <Menu.Target>
          <Avatar
            ref={ref}
            name={loginUser.nickname || loginUser.username}
            color="initials"
            style={{ cursor: "pointer" }}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            component={Link}
            to={ROUTES.PROFILE}
            leftSection={
              <IconUserCircle style={{ width: rem(16), height: rem(16) }} />
            }
          >
            个人中心
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLanguage style={{ width: rem(16), height: rem(16) }} />
            }
          >
            语言
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            onClick={async () => {
              const res = await logout();
              const { code, message } = res.data;
              if (code == 0) {
                notification.success("已退出登录");
                removeUser();
              } else {
                notification.fail(message!);
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
