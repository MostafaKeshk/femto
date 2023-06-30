import { Modal, TextInput, Button, Text } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { calculateMonthlyDeposit } from "../../utils/calculateMonthlyDeposit";
import { getNextMonth } from "../../utils/getNextMonth";

type IProps = {
  isEdit: boolean;
  opened: boolean;
  close: any;
  handleSubmit: any;
  form: any;
  loading: boolean;
};

const GoalModal: React.FC<IProps> = ({
  isEdit,
  opened,
  close,
  handleSubmit,
  form,
  loading,
}) => {
  const { monthlyDeposit, months } = calculateMonthlyDeposit(
    form.values.date,
    form.values.total
  );

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={isEdit ? "Update Goal" : "Create a new Goal"}
      centered
      sx={{
        "& .mantine-Paper-root": {
          overflow: "visible",
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          mt="sm"
          withAsterisk
          label="Total"
          placeholder="Total"
          type="number"
          {...form.getInputProps("total")}
        />
        <MonthPickerInput
          minDate={getNextMonth()}
          mt="sm"
          withAsterisk
          label="Date"
          placeholder="Date"
          mx="auto"
          maw={400}
          {...form.getInputProps("date")}
        />
        {form.values.total && form.values.date && (
          <Text mt="xs" weight="bold" color="brand" fz={14}>
            ${monthlyDeposit.toFixed(2)} monthly deposit for {months} months
          </Text>
        )}
        <Button mt="sm" type="submit" fullWidth loading={loading}>
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default GoalModal;
