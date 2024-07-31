"use client";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div className="flex h-[90vh] text-black">
      {/* Contenido Principal */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Resumen de Ganancias y Gastos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Ganancias del Día</h3>
            <p className="text-2xl">$2000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Gastos del Día</h3>
            <p className="text-2xl">$500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Ganancia Neta</h3>
            <p className="text-2xl">$1500</p>
          </div>
        </div>

        {/* Gráficos y Estadísticas */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Gráficos de Ingresos y Gastos</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex justify-center items-center">
            {/* Aquí iría un componente de gráfico */}
            <p>Gráfico</p>
          </div>
        </div>

        {/* Historial Reciente */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Historial Reciente</h3>
          <ul className="divide-y">
            <li className="py-2 flex justify-between">
              <span>Pago en efectivo</span>
              <span>$300</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Combustible</span>
              <span>$100</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tareas Pendientes o Recordatorios */}
      <aside className="w-64 p-6 bg-white rounded-lg shadow-md overflow-y-auto">
        <h3 className="text-xl font-bold">Tareas Pendientes</h3>
        <ul className="list-disc pl-5">
          <li>Pagar monotributo</li>
          <li>Revisar gastos del mes</li>
          {/* Agrega más tareas según sea necesario */}
        </ul>
      </aside>
    </div>
  );
};

export { Dashboard };
