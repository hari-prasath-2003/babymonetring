import { Router } from "express";
import { videoUploader, getAllVideos } from "./controller.js";

const router = Router();

router.get("/", getAllVideos);

router.post("/upload", videoUploader);

export default router;
