import { Card, Flex, Image, Text } from "@mantine/core";
import Icons from "../../utils/images";

const InfoCard = ({ data }) => {
  return (
    <Card h={200} shadow="lg" withBorder>
      <Flex gap={10} h={"50px"}>
        <Image src={Icons[data.name]} h={"50px"} w={"50px"}></Image>
        <Flex align={"center"} justify={"center"}>
          <Text size="lg" tt={"capitalize"} fw={"bold"}>
            {data.name}
          </Text>
        </Flex>
      </Flex>
      <Flex align={"center"} justify={"center"} h={150}>
        <Text fz={"30px"}>{data.value}</Text>
      </Flex>
    </Card>
  );
};

export default InfoCard;
