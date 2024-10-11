import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Layout from "@/components/Layout";
import Login from "@/pages/user/Login";
import Register from "@/pages/user/Register";
import UserManagement from "@/pages/management/UserManagement";

interface Config {
  path?: string;
  element: JSX.Element;
  index?: boolean;
  children?: Config[];
  isNav?: boolean;
  name?: string;
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
    delete newRoute.name;

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
        element: <>home</>,
        index: true,
        isNav: true,
        name: "Home",
      },
      {
        path: "/user-management",
        element: <UserManagement />,
        role: ["admin"],
        isNav: true,
        name: "User Management",
      },
      {
        path: "/app-management",
        element: <>app-management</>,
        role: ["admin"],
        isNav: true,
        name: "App Management",
      },
      {
        path: "/question-management",
        element: <>question-management</>,
        role: ["admin"],
        isNav: true,
        name: "Question Management",
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
