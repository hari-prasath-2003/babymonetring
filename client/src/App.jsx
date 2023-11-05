import { AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import TopNav from "./Layout/mainLayout/TopNav";
import SideNav from "./Layout/mainLayout/SideNav";
import Main from "./Layout/mainLayout/Main";

import { useEffect } from "react";
import useApiGet from "./hooks/useApiGet";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { data, error, loading } = useApiGet(
    "http://localhost:3000/chat/recomendation"
  );

  useEffect(() => {}, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <TopNav opened={opened} toggle={toggle} />
      <SideNav recomended={data} />
      <Main />
    </AppShell>
  );
}

export default App;
