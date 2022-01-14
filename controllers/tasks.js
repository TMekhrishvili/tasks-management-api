const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const data = await Task.find();
        res.status(200).json({ success: true, error: null, data });
    } catch (error) {
        res.status(500).json({ success: false, error, data: [] });
    }
}

const createTask = async (req, res) => {
    try {
        const data = await Task.create(req.body);
        res.status(201).json({ success: true, error: null, data });
    } catch (error) {
        res.status(500).json({ success: false, error, data: [] });
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const data = await Task.findOne({ _id: taskID });
        res.status(200).json({ success: true, error: null, data });
    } catch (error) {
        res.status(500).json({ success: false, error, data: [] });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const data = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
        if (!data) return res.status(404).json({ success: true, error: null, data: 'no task found' });
        res.status(200).json({ success: true, error: null, data });
    } catch (error) {
        res.status(500).json({ success: false, error, data: [] });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const data = await Task.findOneAndDelete({ _id: taskID });
        if (!data) return res.status(404).json({ success: true, error: null, data: 'no task found' });
        res.status(200).json({ success: true, error: null, data });
    } catch (error) {
        res.status(500).json({ success: false, error, data: [] });
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }