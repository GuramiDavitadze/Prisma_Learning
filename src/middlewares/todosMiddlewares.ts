import type { Response, Request, NextFunction } from "express";
const checkSecretKey = (req: Request, res: Response, next: NextFunction) => {
  const secret_api_key = req?.headers["secret-api-key"];
  const original_secret_api_key = process.env.API_KEY;
  if (secret_api_key != original_secret_api_key) {
    return res.status(403).json({ message: "Wrong Api Key" });
  }
  next();
};

const checkDataExist = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.body === undefined ||
    req.body.name === undefined ||
    req.body.description === undefined
  ) {
    return res.status(400).json({ message: "Please fill all required data" });
  }
  const { name, description } = req.body;
  if (name.trim() === "" || description.trim() === "") {
    return res.status(400).json({ message: "Please fill all required data" });
  }
  next();
};
export { checkSecretKey, checkDataExist };
