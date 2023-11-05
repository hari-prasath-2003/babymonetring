import { Paper, SimpleGrid } from "@mantine/core";
import InfoCard from "../component/healthMonitor/InfoCard";

const HealthMonitor = () => {
  const data = [
    {
      name: "smoke",
      value: 0,
    },
    {
      name: "cng",
      value: 0,
    },
    {
      name: "pulse",
      value: 0,
    },
    {
      name: "wet",
      value: 0,
    },
    {
      name: "temprature",
      value: 0,
    },
    {
      name: "humidity",
      value: 0,
    },
    {
      name: "sound",
      value: 0,
    },
  ];
  return (
    <Paper>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
        {data.map((data, index) => (
          <InfoCard data={data} key={index}></InfoCard>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

export default HealthMonitor;
