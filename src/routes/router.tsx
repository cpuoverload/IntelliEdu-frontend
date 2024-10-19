import { createBrowserRouter } from "react-router-dom";
import { Group } from "@mantine/core";
import {
  IconApps,
  IconBox,
  IconChartPie,
  IconCirclePlus,
  IconFileCheck,
  IconHistory,
  IconHome,
  IconListLetters,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";
import RequireAuth from "./RequireAuth";
import Layout from "@/components/Layout";
import Login from "@/pages/user/Login";
import Register from "@/pages/user/Register";
import Home from "@/pages/Home";
import CreateApplication from "@/pages/application/CreateApplication";
import MyApplication from "@/pages/application/MyApplication";
import MyAnswerRecord from "@/pages/answer-record/MyAnswerRecord";
import UserManagement from "@/pages/management/UserManagement";

export interface Config {
  path?: string;
  element: JSX.Element;
  index?: boolean;
  children?: Config[];
  isNav?: boolean;
  // isNav 为 true 时，需要指定遍历的 key
  key?: string;
  label?: React.ReactNode;
  role?: string[];
}

// react router 不支持 vue router 的 meta，所以需要自己实现
// https://github.com/remix-run/react-router/issues/7834
const transformConfig = (config: Config[]) => {
  return config.map((route) => {
    // 创建一个新的路由对象
    const newRoute = { ...route };

    // 如果有 children，递归处理
    if (newRoute.children) {
      newRoute.children = transformConfig(newRoute.children);
    }

    // 删除多余属性
    delete newRoute.isNav;
    delete newRoute.key;
    delete newRoute.label;

    // 如果有 role 属性，将 element 包裹在 ProtectedRoute 中
    if (newRoute.role) {
      newRoute.element = (
        <RequireAuth role={newRoute.role}>{newRoute.element}</RequireAuth>
      );
    }

    return newRoute;
  });
};

// 自定义配置文件，目的是自动生成导航栏的 Link，不需要再到导航栏组件中手写一遍全部路由以及权限校验了
export const config: Config[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
        isNav: true,
        key: "home",
        label: (
          <Group>
            <IconHome />
            <span>Home</span>
          </Group>
        ),
      },
      {
        path: "/application/create",
        element: <CreateApplication />,
        role: ["user", "admin"],
        isNav: true,
        key: "create-application",
        label: (
          <Group>
            <IconCirclePlus />
            <span>Create Application</span>
          </Group>
        ),
      },
      {
        path: "/application/me",
        element: <MyApplication />,
        role: ["user", "admin"],
        isNav: true,
        key: "my-application",
        label: (
          <Group>
            <IconBox />
            <span>My Application</span>
          </Group>
        ),
      },
      {
        path: "/answer-record/me",
        element: <MyAnswerRecord />,
        role: ["user", "admin"],
        isNav: true,
        key: "my-answer-record",
        label: (
          <Group>
            <IconHistory />
            <span>My Answer Record</span>
          </Group>
        ),
      },
      {
        path: "/user/management",
        element: <UserManagement />,
        role: ["admin"],
        isNav: true,
        key: "user-management",
        label: (
          <Group>
            <IconUsers />
            <span>User Management</span>
          </Group>
        ),
      },
      {
        path: "/application/management",
        element: <>application-management</>,
        role: ["admin"],
        isNav: true,
        key: "application-management",
        label: (
          <Group>
            <IconApps />
            <span>Application Management</span>
          </Group>
        ),
      },
      {
        path: "/question/management",
        element: <>question-management</>,
        role: ["admin"],
        isNav: true,
        key: "question-management",
        label: (
          <Group>
            <IconListLetters />
            <span>Question Management</span>
          </Group>
        ),
      },
      {
        path: "/scoring/management",
        element: <>scoring-management</>,
        role: ["admin"],
        isNav: true,
        key: "scoring-management",
        label: (
          <Group>
            <IconTargetArrow />
            <span>Scoring Management</span>
          </Group>
        ),
      },
      {
        path: "/answer/management",
        element: <>answer-management</>,
        role: ["admin"],
        isNav: true,
        key: "answer-management",
        label: (
          <Group>
            <IconFileCheck />
            <span>Answer Management</span>
          </Group>
        ),
      },
      {
        path: "/statistics",
        element: <>statistics</>,
        role: ["admin"],
        isNav: true,
        key: "statistics",
        label: (
          <Group>
            <IconChartPie />
            <span>Statistics</span>
          </Group>
        ),
      },
      {
        path: "*",
        element: <>404 Error - Nothing here...</>,
      },
    ],
  },
];

const findNavRoutes = (routes: Config[]) => {
  let navItems: Config[] = [];

  routes.forEach((route) => {
    // 如果该路由有 isNav: true，添加到 navItems
    if (route.isNav) {
      navItems.push(route);
    }
    // 如果有 children，则递归查找子路由
    if (route.children) {
      navItems = navItems.concat(findNavRoutes(route.children));
    }
  });

  return navItems;
};

export const navRoutes = findNavRoutes(config);

// @ts-expect-error react router 类型定义有点奇怪
const router = createBrowserRouter(transformConfig(config));

export default router;
