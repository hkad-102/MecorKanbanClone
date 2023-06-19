import React, { useState } from "react";

const TaskModal = ({ task, onSave, onCancel }) => {
  const [priority, setPriority] = useState(task ? task.priority : "low");
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleSave = () => {
    onSave({
      id: task ? task.id : Date.now().toString(),
      priority,
      title,
      description,
      column: 'todo'
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-1/2 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {task ? "Edit Task" : "Create Task"}
        </h2>
        <div className="mb-4">
          <label className="block mb-2">Priority</label>
          <select
            className="block w-full p-2 border border-gray-300 rounded"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            className="block w-full p-2 border border-gray-300 rounded outline-none"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="block w-full p-2 border border-gray-300 rounded outline-none"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskModal;
