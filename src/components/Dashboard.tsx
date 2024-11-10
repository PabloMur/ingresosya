"use client";
import { useProtectedPage } from "@/hooks/uiHooks";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface EarningsData {
  date: string;
  earnings: number;
}

const mockData: EarningsData[] = [
  { date: "2024-07-01", earnings: 20000 },
  { date: "2024-07-02", earnings: 25000 },
  { date: "2024-07-03", earnings: 15000 },
  { date: "2024-07-04", earnings: 40000 },
  { date: "2024-07-05", earnings: 20000 },
];

const Dashboard = () => {
  useProtectedPage();

  const calculateMonthlyAverage = (data: EarningsData[]): string => {
    const total = data.reduce((acc, day) => acc + day.earnings, 0);
    return (total / data.length).toFixed(2);
  };

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

  const [data, setData] = useState<EarningsData[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <div className="relative w-full h-[90vh]">
      <div className="flex h-full text-black w-full">
        {/* Contenido Principal */}
        <div className="flex-1 p-6 space-y-6 px-10 overflow-y-auto">
          {/* Gráficos y Estadísticas */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full gap-2 flex flex-col">
            <h3 className="text-xl font-bold">Gráficos de Rendimiento</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="earnings" fill="#ADF802" />
                </BarChart>
              </ResponsiveContainer>
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
      </div>
    </div>
  );
};

export { Dashboard };
