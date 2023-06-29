import withAuth from "../../routes/withAuth";
import { Group, Button } from "@mantine/core";
import useGoal from "../../containers/useGoal";
import GoalModal from "../../components/Goals/GoalModal";
import List from "../../components/List";
import Goal from "../../components/Goals/Goal";
import { Container } from "@mantine/core";
import DeleteDialog from "../../components/DeleteDialog";
const Goals = () => {
  const {
    opened,
    handleOpenCreate,
    handleOpenUpdate,
    close,
    form,
    handleSubmit,
    loading,
    goals,
    count,
    handleChangePage,
    page,
    pageLoading,
    selectedGoal,

    handleOpenDelete,
    openedDelete,
    closeDelete,
    handleDelete,
  } = useGoal();

  return (
    <Container>
      <List
        name="goals"
        list={goals}
        Card={
          <Goal
            handleOpenUpdate={handleOpenUpdate}
            handleOpenDelete={handleOpenDelete}
          />
        }
        loading={pageLoading}
        count={count}
        page={page}
        handleChangePage={handleChangePage}
      />
      <GoalModal
        isEdit={!!selectedGoal._id}
        opened={opened}
        close={close}
        handleSubmit={form.onSubmit(handleSubmit)}
        form={form}
        loading={loading}
      />
      <DeleteDialog
        opened={openedDelete}
        close={closeDelete}
        name="goal"
        loading={loading}
        handleDelete={handleDelete}
      />
      <Group position="center">
        <Button onClick={handleOpenCreate}>Create a new Goal</Button>
      </Group>
    </Container>
  );
};

export default withAuth(Goals);
