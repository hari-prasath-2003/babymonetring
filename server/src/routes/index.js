import { Router } from "express";

import userRoute from "../domain/user/index.js";
import videoRoute from "../domain/video/index.js";
import verifyUser from "../utils/verifyUser.js";

const router = Router();

router.use("/user", userRoute);
router.use(verifyUser);
router.use("/video", videoRoute);

export default router;
