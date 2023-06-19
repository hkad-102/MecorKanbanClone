import Card from "./Card";
import { IoIosAdd } from "react-icons/io";

import React, { useState } from "react";
import { data } from "./data";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(data);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex p-8">
      <div className="grid grid-cols-3 gap-4 items-start">
        <div
          className="w-[354px] rounded-t-2xl bg-[#F5F5F5] p-[20px]"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <div className="flex items-center justify-between border-b-4 border-[#5030E5] pb-[20px] mb-7">
            <div className="flex items-center">
              <div className="bg-[#5030E5] w-2 h-2 rounded-full mr-2"></div>
              <h3 className="mr-3">To Do</h3>
            </div>
            <button className="text-[#5030E5] bg-[#5030E5]/[0.2] h-[20px] w-[20px] rounded-md">
              <IoIosAdd size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-[20px]">
            {tasks.map((task) => {
              if (task.status === "todo") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id.toString())}
                  >
                    <Card
                      task={task}
                      key={task.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, task.id.toString())
                      }
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div
          className="w-[354px] rounded-t-2xl bg-[#F5F5F5] p-[20px]"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "in-progress")}
        >
          <div className="flex items-center justify-between border-b-4 border-[#FFA500] pb-[20px] mb-7">
            <div className="flex items-center">
              <div className="bg-[#FFA500] w-2 h-2 rounded-full mr-2"></div>
              <h3 className="mr-3">In Progress</h3>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {tasks.map((task) => {
              if (task.status === "in-progress") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id.toString())}
                  >
                    <Card
                      task={task}
                      key={task.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, task.id.toString())
                      }
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div
          className="w-[354px] rounded-t-2xl bg-[#F5F5F5] p-[20px]"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "done")}
        >
          <div className="flex items-center justify-between border-b-4 border-[#8BC48A] pb-[20px] mb-7">
            <div className="flex items-center">
              <div className="bg-[#8BC48A] w-2 h-2 rounded-full mr-2"></div>
              <h3 className="mr-3">Done</h3>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {tasks.map((task) => {
              if (task.status === "done") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id.toString())}
                  >
                    <Card
                      task={task}
                      key={task.id}
                      complete={true}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, task.id.toString())
                      }
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
