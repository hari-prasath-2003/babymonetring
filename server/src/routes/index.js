import { Router } from "express";

import userRoute from "../domain/user/index.js";

import verifyUser from "../utils/verifyUser.js";

const routes = Router();

routes.use("/user", userRoute);
routes.use(verifyUser);

export default routes;
