import dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });
export const AppEnv = {
  PORT: process.env.PORT || 3000,
};
