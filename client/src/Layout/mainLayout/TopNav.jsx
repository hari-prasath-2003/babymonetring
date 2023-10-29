import { AppShell, Avatar, Burger, Flex } from "@mantine/core";

import userStore from "../../app/userStore";

const TopNav = ({ opened, toggle }) => {
  const userProfile = userStore((state) => state.userProfile);
  return (
    <AppShell.Header>
      <Flex
        justify={"space-between"}
        direction={"row-reverse"}
        p={"sm"}
        h={"100%"}
      >
        <Avatar src={"http://localhost:3000/assets/profile/" + userProfile} />
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={"sm"} />
      </Flex>
    </AppShell.Header>
  );
};

export default TopNav;
