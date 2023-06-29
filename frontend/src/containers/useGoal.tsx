import { useForm, yupResolver } from "@mantine/form";
import useCallApi from "../hooks/useCallApi";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import goalSchema from "../validations/goal";
import GoalApi from "../apis/goal";
import { useEffect, useState } from "react";

const useGoal = () => {
  const { callApi, loading } = useCallApi();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const initGoal = {
    total: 0,
    date: new Date(),
    _id: "",
    user: "",
  };
  const [selectedGoal, setSelectedGoal] = useState(initGoal);
  const [pageLoading, setPageLoading] = useState(true);

  const [goals, setGoals] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);

  const fetchGoals = (page: number, limit: number, cb: any) => {
    callApi(GoalApi.get(page, limit), (response: any) => {
      setGoals(response.rows);
      setCount(response.count);
      if (cb) {
        cb();
      }
    });
  };

  useEffect(() => {
    setPageLoading(true);
    fetchGoals(1, 6, () => {
      setPageLoading(false);
    });
  }, []);

  const handleCreate = (values: any) => {
    callApi(GoalApi.create(values), (response: any) => {
      notifications.show({
        color: "green",
        message: "Goal has been created successfully",
      });
      setPage(1);
      fetchGoals(1, 6, () => {
        close();
      });
    });
  };

  const handleUpdate = (values: any) => {
    callApi(GoalApi.update(selectedGoal._id, values), (response: any) => {
      notifications.show({
        color: "green",
        message: "Goal has been updated successfully",
      });
      const newGoals = [...goals];
      const index = newGoals.findIndex((goal) => goal._id === selectedGoal._id);
      newGoals[index] = response.goal;
      setGoals(newGoals);
      close();
    });
  };

  const handleSubmit = (values: any) =>
    selectedGoal._id ? handleUpdate(values) : handleCreate(values);

  const form = useForm({
    initialValues: {
      total: "",
      date: null,
    },
    validate: yupResolver(goalSchema),
  });

  const handleOpenUpdate = (goal: any) => {
    const newDate: any = new Date(goal.date);
    form.setValues({
      total: goal.total,
      date: newDate,
    });
    open();
    setSelectedGoal(goal);
  };

  const handleOpenCreate = () => {
    form.setValues({
      total: "",
      date: null,
    });
    open();
    setSelectedGoal(initGoal);
  };

  const handleOpenDelete = (goal: any) => {
    setSelectedGoal(goal);
    openDelete();
  };

  const handleDelete = () => {
    callApi(GoalApi.delete(selectedGoal._id), () => {
      notifications.show({
        color: "green",
        message: "Goal has been deleted successfully",
      });
      setPage(1);
      fetchGoals(1, 6, () => {
        closeDelete();
      });
    });
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    setPageLoading(true);
    fetchGoals(page, 6, () => {
      setPageLoading(false);
    });
  };

  return {
    form,
    handleSubmit,
    loading,
    opened,
    handleOpenCreate,
    handleOpenUpdate,
    close,
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
  };
};

export default useGoal;
