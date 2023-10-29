import { Container, Grid, Image, Text } from "@mantine/core";
import Webcam from "react-webcam";

const Video = () => {
  const oldVideos = [
    {
      id: 1,
      thumbnail: "video1.jpg",
      startTime: "2023-10-27 10:00 AM",
      endTime: "2023-10-27 10:30 AM",
    },
    {
      id: 2,
      thumbnail: "video2.jpg",
      startTime: "2023-10-27 11:00 AM",
      endTime: "2023-10-27 11:30 AM",
    },
    // Add more video objects as needed
  ];

  return (
    <Container>
      {/* Horizontal scroll list for old videos */}
      <div style={{ overflowX: "auto" }}>
        <Grid gutter="md">
          {oldVideos.map((video) => (
            <div key={video.id}>
              <Image
                src={video.thumbnail}
                alt="Video Thumbnail"
                width={150}
                height={100}
              />
              <Text>
                Date & Time: {video.startTime} - {video.endTime}
              </Text>
            </div>
          ))}
        </Grid>
      </div>

      {/* Video Stream */}
      <Text>Video Stream</Text>
      <Webcam />
    </Container>
  );
};

export default Video;
