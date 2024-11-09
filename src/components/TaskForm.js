// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

function TaskForm({ onAddOrEditTask, editingTask }) {
    const [task, setTask] = useState({ title: '', description: '' });

    useEffect(() => {
        if (editingTask) {
            setTask(editingTask);
        }
    }, [editingTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddOrEditTask(task);
        setTask({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Task Title"
                required
            />
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Task Description"
            ></textarea>
            <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;
