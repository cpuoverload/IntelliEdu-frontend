import { generateService } from "@umijs/openapi";

// apiPrefix 字段需要嵌套字符串
// https://github.com/chenshuai2144/openapi2typescript/issues/71

// 多个 swagger 地址
// https://github.com/chenshuai2144/openapi2typescript/issues/87

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8081/api/user/v3/api-docs",
  serversPath: "./src/services",
  apiPrefix: "'/api/user'",
  projectName: "user",
  namespace: "User",
});

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8082/api/application/v3/api-docs",
  serversPath: "./src/services",
  apiPrefix: "'/api/application'",
  projectName: "application",
  namespace: "App",
});

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8083/api/scoring/v3/api-docs",
  serversPath: "./src/services",
  apiPrefix: "'/api/scoring'",
  projectName: "scoring",
  namespace: "Scoring",
});

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8084/api/answer-record/v3/api-docs",
  serversPath: "./src/services",
  apiPrefix: "'/api/answer-record'",
  projectName: "answer-record",
  namespace: "Answer",
});
