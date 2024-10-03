import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Layout from "@/components/Layout";

// react router 不支持 vue router 的 meta，所以需要自己实现
// https://github.com/remix-run/react-router/issues/7834
const transformConfig = (config) => {
  return config.map((route) => {
    // 创建一个新的路由对象
    const newRoute = { ...route };

    // 如果有 children，递归处理
    if (newRoute.children) {
      newRoute.children = transformConfig(newRoute.children);
    }

    // 删除 isNav 属性
    delete newRoute.isNav;

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
const config = [
  {
    path: "/login",
    element: <>login</>,
  },
  {
    path: "/register",
    element: <>register</>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <>home</>,
        index: true,
        isNav: true,
      },
      {
        path: "/user-management",
        element: <>user-management</>,
        // role: ["user"],
        isNav: true,
      },
      {
        path: "/app-management",
        element: <>app-management</>,
        isNav: true,
      },
      {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
];

const router = createBrowserRouter(transformConfig(config));

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <>login</>,
//   },
//   {
//     path: "/register",
//     element: <>register</>,
//   },
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         element: <>home</>,
//         index: true,
//       },
//       {
//         path: "/user-management",
//         element: (
//           // <RequireAuth role={["user"]}>
//           <>user-management</>
//           // </RequireAuth>
//         ),
//       },
//       {
//         path: "/app-management",
//         element: <>app-management</>,
//       },
//       {
//         path: "*",
//         element: <p>404 Error - Nothing here...</p>,
//       },
//     ],
//   },
// ]);

export default router;
