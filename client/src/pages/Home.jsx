import { Box, Paper } from "@mantine/core";
import React from "react";
import userStore from "../app/userStore";

const Home = () => {
  const name = userStore((state) => state.userName);
  return <Paper>Welcome {name}</Paper>;
};

export default Home;
