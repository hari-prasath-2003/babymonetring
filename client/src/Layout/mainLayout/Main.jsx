import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <AppShell.Main h={"calc(100vh - 92px)"}>
      <Outlet />
    </AppShell.Main>
  );
};

export default Main;
