import Task from "../models/task.js";

export const gettask = async (req, res) => {
    try {

      const users = await Task.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };