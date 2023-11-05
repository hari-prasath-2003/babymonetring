import { AppShell, Button, Flex } from "@mantine/core";
import {
  FaVideo,
  FaHandHoldingMedical,
  FaUserGear,
  FaWifi,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <AppShell.Navbar p={"md"}>
      <Flex direction={"column"} gap={20}>
        <Button
          leftSection={<FaVideo />}
          variant="default"
          onClick={() => navigate("/video")}
        >
          Video Streaming
        </Button>
        <Button
          leftSection={<FaUserGear />}
          variant="default"
          onClick={() => navigate("/cradle-control")}
        >
          Cradle Control
        </Button>
        <Button
          leftSection={<FaHandHoldingMedical />}
          variant="default"
          onClick={() => navigate("/health-monitor")}
        >
          Health Moniter
        </Button>
        <Button
          leftSection={<FaWifi />}
          variant="default"
          onClick={() => navigate("/sensor")}
        >
          Saved Videos
        </Button>
      </Flex>
    </AppShell.Navbar>
  );
};

export default SideNav;
