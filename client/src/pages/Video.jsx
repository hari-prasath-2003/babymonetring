import {
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";
import Webcam from "react-webcam";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from "react";
import useApiPost from "../hooks/userApiPost";
import api from "../services/api";
import useApiGet from "../hooks/useApiGet";

const Video = () => {
  const videoRef = useRef(null);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      video: true,
    });

  const {
    data: previousVideo,
    error,
    lodaing,
  } = useApiGet("http://localhost:3000/video");
  // const { data, error, loading, postData } = useApiPost();

  useEffect(() => {
    const sendVideoToServer = async () => {
      if (status == "stopped") {
        const videoFetchRes = await fetch(mediaBlobUrl);
        const videoData = await videoFetchRes.blob();
        const filename = api.upload(
          "http://localhost:3000/video/upload",
          videoData,
          "mp4",
          "video"
        );
      }
    };
    sendVideoToServer();
  }, [status]);

  function handleVideoSelect(filename) {
    videoRef.current.src =
      "http://localhost:3000/assets/video/" + filename + ".mp4";
  }
  return (
    <Container>
      <Text>Video Stream</Text>
      <Tabs defaultValue={"live"}>
        <Tabs.List>
          <Tabs.Tab value="live">Live</Tabs.Tab>
          <Tabs.Tab value="recorded">Recorded</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="live">
          <Center>
            <Webcam />
          </Center>
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="recorded">
          <video controls ref={videoRef} width={"100%"} />
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} py={50}>
            {previousVideo?.map((filename, index) => (
              <Card
                key={index}
                w={300}
                shadow="lg"
                withBorder
                onClick={() => handleVideoSelect(filename)}
              >
                <Image
                  src={
                    "http://localhost:3000/assets/thumbnail/" +
                    filename +
                    ".jpg"
                  }
                  fit="contain"
                />
              </Card>
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Video;
