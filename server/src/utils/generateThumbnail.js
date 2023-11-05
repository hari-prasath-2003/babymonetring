import path from "path";
import ffmpeg from "fluent-ffmpeg";

export default function generateThumbnail(fileName, filePath) {
  const dirName = process.cwd();
  const thumbnailFilename = fileName.replace(".mp4", ".jpg");

  const thumbnailPath = path.join(
    dirName,
    "assets",
    "thumbnail",
    thumbnailFilename
  );

  // Create a new FFmpegCommand object
  const command = ffmpeg();

  // Add the input and output files
  command.input(filePath);
  command.output(thumbnailPath);

  // Seek to 1 seconds into the video
  command.seek("00:00:01");

  // Output 1 frame
  command.frames("1");

  // Execute the command

  command.run();
}
