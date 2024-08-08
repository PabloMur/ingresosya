"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Definición del tipo para los datos de las ganancias
interface EarningsData {
  date: string;
  earnings: number;
}

// Datos mockeados
const mockData: EarningsData[] = [
  { date: "2024-07-01", earnings: 20000 },
  { date: "2024-07-02", earnings: 25000 },
  { date: "2024-07-03", earnings: 15000 },
  { date: "2024-07-04", earnings: 40000 },
  { date: "2024-07-05", earnings: 20000 },
];

// Función para calcular el promedio mensual
const calculateMonthlyAverage = (data: EarningsData[]): string => {
  const total = data.reduce((acc, day) => acc + day.earnings, 0);
  return (total / data.length).toFixed(2);
};

// Función para calcular el promedio por hora
const calculateHourlyAverage = (data: EarningsData[]): string => {
  const total = data.reduce((acc, day) => acc + day.earnings, 0);
  const totalHours = data.length * 8; // Suponiendo 8 horas por día
  return (total / totalHours).toFixed(2);
};

// Función para calcular el gasto mensual en combustible
const calculateMonthlyFuelCost = (data: EarningsData[]): string => {
  // Suponiendo que se gasta un promedio de 1000 pesos en combustible por día
  return (data.length * 1000).toFixed(2);
};

// Componente principal
const ResultsPage: React.FC = () => {
  const [data, setData] = useState<EarningsData[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-200 overflow-y-auto w-full">
      {/* Título */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Resultados</h3>
      </div>

      {/* Resumen de Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Ingresos</h3>
          <p className="text-2xl">
            ${mockData.reduce((acc, day) => acc + day.earnings, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Gastos</h3>
          <p className="text-2xl">$2000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Ganancia Neta</h3>
          <p className="text-2xl">$3000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Promedio de Ganancias por Hora</h3>
          <p className="text-2xl">${calculateHourlyAverage(data)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Promedio de Ganancias por Mes</h3>
          <p className="text-2xl">${calculateMonthlyAverage(data)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Gasto Mensual en Combustible</h3>
          <p className="text-2xl">${calculateMonthlyFuelCost(data)}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Gráficos de Rendimiento</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detalles de Resultados */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Detalles de Resultados</h3>
        <ul className="divide-y">
          {data.map((day, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{day.date}</span>
              <span>${day.earnings}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;
