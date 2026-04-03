import path from "path";
import yaml from "yamljs";

export const swaggerSpec = yaml.load(path.join(__dirname, "../../swagger.yml"));
// import swaggerJsdoc from "swagger-jsdoc";

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Todo API",
//       version: "1.0.0",
//       description: "Simple Todo REST API",
//     },
//     servers: [
//       {
//         url: "http://localhost:3008",
//       },
//     ],
//     components: {
//       securitySchemes: {
//         ApiKeyAuth: {
//           type: "apiKey",
//           in: "header",
//           name: "secret-api-key",
//         },
//       },
//     },
//     security: [{ ApiKeyAuth: [] }],
//   },
//   apis: ["./src/routes/*.ts"],
// };

// export const swaggerSpec = swaggerJsdoc(options);
