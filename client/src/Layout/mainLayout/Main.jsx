import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  );
};

export default Main;
