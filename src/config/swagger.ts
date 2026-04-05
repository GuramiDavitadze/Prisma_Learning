import path from "path";
import yaml from "yamljs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerSpec = yaml.load(path.join(__dirname, "../../swagger.yml"));
