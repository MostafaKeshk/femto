import { Button, Group, Modal } from "@mantine/core";

type IProps = {
  opened: boolean;
  close: any;
  name: string;
  loading: boolean;
  handleDelete: any;
};

const DeleteDialog: React.FC<IProps> = ({
  opened,
  close,
  name,
  loading,
  handleDelete,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={`Are you sure you want to delete this ${name}?`}
      centered
    >
      <Group position="right">
        <Button onClick={close}>Cancel</Button>
        <Button loading={loading} onClick={handleDelete} color="red">
          Delete
        </Button>
      </Group>
    </Modal>
  );
};

export default DeleteDialog;
