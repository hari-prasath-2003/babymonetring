import fs from "fs";
import generateThumbnail from "../../utils/generateThumbnail.js";
import randomFilename from "../../utils/randomFilename.js";
import path from "path";

export function videoUploader(req, res) {
  const { fileName, filePath } = randomFilename(req.headers);

  req.on("data", (chunk) => {
    fs.appendFileSync(filePath, chunk);
  });

  req.on("end", () => {
    generateThumbnail(fileName, filePath);
    return res.json({ success: true, fileName: fileName });
  });
}

export function getAllVideos(req, res) {
  const dirName = process.cwd();
  const filePath = path.join(dirName, "assets", "thumbnail");

  fs.readdir(filePath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read folder contents" });
    }

    const thumbnailFiles = files.map((file) => file.replace(".jpg", ""));

    res.status(200).json(thumbnailFiles);
  });
}
