import axios from "axios";
import ErrorMap from "@/const/error";
import notification from "@/utils/notification";
import useStore from "@/store/store";

const apiClient = axios.create({
  // baseURL 在开发环境配置为 path，域名默认是开发服务器的域名，会被代理。在生产环境配置为绝对 url。
  // todo: 改为线上域名
  baseURL: import.meta.env.PROD ? "https://xxx" : "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleResponseFulfilled = (response) => {
  const { code, message } = response.data;

  if (code === undefined) {
    notification.fail("System Error");
    return Promise.reject(response);
  }

  if (code != 0) {
    response.data.message = message || ErrorMap[code] || "System Error";
  }

  return response;
};

const handleResponseRejected = (error) => {
  if (!error.response) {
    notification.fail("Network Error");
    return Promise.reject(error);
  }

  const { status, data } = error.response;

  if (status === 403) {
    // 对于 /user/get/me 接口，不做任何提示，因为 App 初始化时会请求该接口，不应弹出报错提示
    if (error.config.url.includes("/user/get/me")) {
      return;
    }
    // 未登录，跳转到登录页
    if (data.code === "10002") {
      const { removeUser } = useStore.getState();
      removeUser();
      notification.fail("Please login first.");
      // 在 React 组件外使用 React Router 导航，官方说不稳定
      // https://github.com/remix-run/react-router/issues/9422#issuecomment-1301182219
      // 暂时用 window.location.href 代替，但会刷新页面
      window.location.href = "/login";
      return;
    }
    notification.fail("You don't have permission to access this resource.");
    return;
  }

  return Promise.reject(error);
};

apiClient.interceptors.response.use(
  handleResponseFulfilled,
  handleResponseRejected
);

export default apiClient;
