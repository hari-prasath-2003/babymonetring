import fs from "fs";

import randomFilename from "./randomFilename.js";

//generate file name and writing the file content in fie system

export default function fileUploader(req, res) {
  const { fileName, filePath } = randomFilename(req.headers);

  req.on("data", (chunk) => {
    fs.appendFileSync(filePath, chunk);
  });

  req.on("end", () => {
    return res.json({ success: true, fileName: fileName });
  });
}
