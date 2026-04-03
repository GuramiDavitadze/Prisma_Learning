import path from "path";
import yaml from "yamljs";

export const swaggerSpec = yaml.load(path.join(__dirname, "../../swagger.yml"));