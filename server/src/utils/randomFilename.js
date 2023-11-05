import { v4 as uuidv4 } from "uuid";
import path from "path";

export default function randomFilename(fileInfo) {
  // directory name
  const dirName = process.cwd();
  // subfolder name like [profile,image,video,audio]
  const assetType = fileInfo["assettype"];
  // .png , .jpg etc
  const fileType = fileInfo["filetype"];
  // random file name
  const fileName = `${uuidv4()}.${fileType}`;
  // generating actual filepath all file will be stored in asset folder
  const filePath = path.join(dirName, "assets", assetType, fileName);

  return { fileName, filePath };
}
