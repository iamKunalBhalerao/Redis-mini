import dotenv from "dotenv";
import app from "./app";
import { appConfig } from "./config/app.config";

dotenv.config();

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
