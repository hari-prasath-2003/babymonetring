import { Router } from "express";
import { loginHandler, signupHandler } from "./controller.js";
import fileUploadHandler from "../../utils/fileUploader.js";

const router = Router();

router.post("/login", loginHandler);

router.post("/signup", signupHandler);

router.post("/profile", fileUploadHandler);

router.post("/video-upload", fileUploadHandler);

export default router;
