import { generateService } from "@umijs/openapi";

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8081/api/user/v3/api-docs",
  serversPath: "./src/services",
  apiPrefix: "'/user'", // 需要嵌套字符串   https://github.com/chenshuai2144/openapi2typescript/issues/71
});
