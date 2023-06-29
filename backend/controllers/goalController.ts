import Goal from "../models/goal";

export const getGoal = async (req: any, res: any) => {
  try {
    const goal = await Goal.findById(req.params.id);
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve goal" });
  }
};

export const getAllGoals = async (req: any, res: any) => {
  try {
    const { pageNumber, pageSize } = req.query;

    const page = parseInt(pageNumber) || 1;
    const limit = parseInt(pageSize) || 10;

    const skip = (page - 1) * limit;

    const rows = await Goal.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const count = await Goal.countDocuments();

    res.status(200).json({ rows, count });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve goals" });
  }
};

export const updateGoal = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { total, date, userId } = req.body;

    const goal: any = await Goal.findById(id);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    goal.total = total;
    goal.date = date;

    await goal.save();

    res.status(200).json({ message: "Goal data updated successfully", goal });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Failed to update goal" });
  }
};

export const createGoal = async (req: any, res: any) => {
  try {
    const { total, date } = req.body;

    const goal = new Goal({
      total,
      date,
      user: req.id,
    });
    await goal.save();

    res.status(201).json({ message: "Goal created successfully", goal });
  } catch (error) {
    res.status(500).json({ message: "Failed to create goal" });
  }
};

export const deleteGoal = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const deletedGoal = await Goal.findByIdAndRemove(id);

    if (!deletedGoal) {
      return res.status(404).json({ error: "Goal not found" });
    }

    return res.json({ message: "Goal deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
