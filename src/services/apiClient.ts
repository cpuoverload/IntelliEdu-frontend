import axios from "axios";
import ErrorMap from "@/const/error";
import notification from "@/utils/notification";

const apiClient = axios.create({
  // baseURL 在开发环境配置为 path，域名默认是开发服务器的域名，会被代理。在生产环境配置为绝对 url。
  // todo: 改为线上域名
  baseURL: import.meta.env.PROD ? "https://xxx" : "/api/user",
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
    notification.fail("系统错误");
    return Promise.reject(response);
  }

  if (code != 0) {
    response.data.message = message || ErrorMap[code] || "系统错误";
  }

  return response;
};

const handleResponseRejected = (error) => {
  if (!error.response) {
    notification.fail("网络错误，请检查您的连接。");
    return Promise.reject(error);
  }

  const { status, data } = error.response;

  if (status === 403) {
    // 未登录，跳转到登录页
    if (data.code === "10001") {
      // todo 移除 loginUser 状态，需要 zustand 非 hook 方式获取 state
      notification.fail("请登录后再操作");
      window.location.href = "/login";
      return;
    }
    notification.fail("无权限访问该资源。");
    return;
  }

  return Promise.reject(error);
};

apiClient.interceptors.response.use(
  handleResponseFulfilled,
  handleResponseRejected
);

export default apiClient;
