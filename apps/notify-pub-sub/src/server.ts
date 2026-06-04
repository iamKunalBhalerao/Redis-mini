import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { appConfig } from "./config/app.config";

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
