import { Button, Card, Group, Text } from "@mantine/core";
import { calculateMonthlyDeposit } from "../../utils/calculateMonthlyDeposit";
import { viewDate } from "../../utils/viewDate";

type IProps = {
  data?: any;
  handleOpenUpdate: any;
  handleOpenDelete: any;
};

const Goal: React.FC<IProps> = ({
  data,
  handleOpenUpdate,
  handleOpenDelete,
}) => {
  const { monthlyDeposit, months } = calculateMonthlyDeposit(
    data.date,
    data.total
  );
  if (!data) return <></>;

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{ height: "100%" }}
    >
      <Text weight={500}>Total Goal: ${data.total.toFixed(2)}</Text>

      <Text my="xs" size="sm">
        Goal Date: {viewDate(data.date)}
      </Text>

      <Text weight="bold" color="brand" size="sm">
        ${monthlyDeposit.toFixed(2)} monthly deposit for {months} months
      </Text>

      <Group position="right" mt="md">
        <Button
          color="brand"
          radius="md"
          onClick={() => handleOpenUpdate(data)}
        >
          Edit
        </Button>

        <Button color="red" radius="md" onClick={() => handleOpenDelete(data)}>
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default Goal;
