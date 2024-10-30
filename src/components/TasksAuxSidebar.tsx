const TasksAuxSidebar = () => {
  return (
    <div className="flex-1 bg-white p-2 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-red-600 mb-2">Tareas Pendientes</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Pagar monotributo</li>
        <li>Revisar gastos del mes</li>
        {/* Agrega más tareas según sea necesario */}
      </ul>
    </div>
  );
};

export { TasksAuxSidebar };
