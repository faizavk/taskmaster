import express from "express";
import prisma from "../lib/prisma.js";

const router = express.Router();


// ✅ GET all tasks (with filters)
router.get("/", async (req, res) => {
  try {
    const { status, sort } = req.query;

    let where = {};
    let orderBy = {};

    // filter
    if (status === "completed") where.isCompleted = true;
    if (status === "pending") where.isCompleted = false;

    // sort
    if (sort === "priority") orderBy.priority = "desc";
    if (sort === "dueDate") orderBy.dueDate = "asc";

    const tasks = await prisma.task.findMany({
      where,
      orderBy,
    });

    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});


// ✅ CREATE task
router.post("/", async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    if (!title || !dueDate) {
      return res.status(400).json({ error: "Title and dueDate required" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        dueDate: new Date(dueDate),
      },
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});


// ✅ TOGGLE COMPLETE
router.patch("/:id/toggle", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.task.findUnique({ where: { id } });

    const updated = await prisma.task.update({
      where: { id },
      data: {
        isCompleted: !existing.isCompleted,
      },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to toggle task" });
  }
});


// ✅ DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await prisma.task.delete({ where: { id } });

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default router;