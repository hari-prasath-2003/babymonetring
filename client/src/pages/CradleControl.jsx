import { Box, Flex, Paper, Switch } from "@mantine/core";
import Lottie from "lottie-react";
import MotorRunningAnimation from "../animation_loejdljx.json";
import React from "react";

const CradleControl = () => {
  return (
    <Paper h={"100%"}>
      <Flex align={"center"} justify={"center"} h={"100%"} direction={"column"}>
        <Lottie animationData={MotorRunningAnimation} height={500}></Lottie>
        <Switch size="xl" onLabel="ON" offLabel="OFF" />
      </Flex>
    </Paper>
  );
};

export default CradleControl;
