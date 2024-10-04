import { generateService } from "@umijs/openapi";

generateService({
  requestLibPath: "@/services/apiClient",
  schemaPath: "http://localhost:8081/api/user/v3/api-docs",
  serversPath: "./src/services",
});
