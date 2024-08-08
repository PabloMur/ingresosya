"use client";
import React, { useState } from "react";

// Definición del tipo para las tareas
interface Task {
  id: number;
  title: string;
  status: "Pendiente" | "Completada";
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Tarea 1", status: "Pendiente" },
    { id: 2, title: "Tarea 2", status: "Pendiente" },
    { id: 3, title: "Tarea 3", status: "Completada" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") return;

    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: "Pendiente",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setIsModalOpen(false);
  };

  const toggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pendiente" ? "Completada" : "Pendiente",
            }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-100 h-[90vh] w-full p-3 flex flex-col justify-start items-center gap-3">
      {/* Header de la página de tareas */}
      <div className="bg-white p-3 rounded-xl flex justify-between items-center w-full shadow-md">
        <h2 className="text-black font-bold text-xl">Tareas</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 p-2 rounded-lg font-bold text-white"
        >
          Agregar Tarea
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="w-full h-full overflow-y-auto">
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-xl text-black"
            >
              <div>
                <span
                  className={`font-bold ${
                    task.status === "Completada" ? "line-through" : ""
                  }`}
                >
                  {task.title}
                </span>
                <span
                  className={`ml-2 text-sm ${
                    task.status === "Pendiente"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  ({task.status})
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTaskStatus(task.id)}
                  className="bg-green-500 text-white p-2 rounded-md"
                >
                  {task.status === "Pendiente" ? "Completar" : "Desmarcar"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal para agregar tareas */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-md w-1/3">
            <h3 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h3>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Título de la tarea"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white p-2 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddTask}
                className="bg-green-500 text-white p-2 rounded-md"
              >
                Agregar Tarea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
