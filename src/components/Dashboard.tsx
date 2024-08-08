"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLoader } from "@/hooks/uiHooks";
import { Loader } from "@/components/ui/Loader";

// Ejemplo de función para obtener el clima (usando una API ficticia)
const fetchWeather = async () => {
  // Aquí podrías usar fetch o axios para llamar a una API real
  // const response = await fetch('https://api.example.com/weather');
  // const data = await response.json();
  // return data;

  // Datos de clima mock para este ejemplo
  return {
    temperature: 25, // Temperatura en grados Celsius
    description: "Despejado",
    date: new Date(),
  };
};

const Dashboard = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [loaderState, toggleLoader] = useLoader();

  useEffect(() => {
    const getWeather = async () => {
      const weatherData = await fetchWeather();
      setWeather(weatherData);
    };
    getWeather();
  }, []);

  return (
    <div className="relative w-full h-[90vh]">
      <Loader />

      <div className="flex h-full text-black w-full">
        {/* Contenido Principal */}
        <div className="flex-1 p-6 space-y-6 px-10 overflow-y-auto">
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
        <aside className="w-64 p-6 m-3 bg-white rounded-lg shadow-md overflow-y-auto">
          <div className="border-b pb-3 flex flex-col gap-2">
            <p className="font-bold">Atajos</p>
            <Link
              href={"/income"}
              className="bg-red-600 rounded-xl p-3 font-bold text-white w-full text-center"
              onClick={toggleLoader}
            >
              Ingresar balance dia
            </Link>
          </div>

          {/* Tarjeta de Clima */}
          {weather && (
            <div className="mt-4 bg-blue-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">Clima Actual</h3>
              <p>{weather.description}</p>
              <p>Temperatura: {weather.temperature}°C</p>
              <p>
                {weather.date.toLocaleDateString()}{" "}
                {weather.date.toLocaleTimeString()}
              </p>
              <p>
                Sugerencia:{" "}
                {weather.temperature < 15
                  ? "Usa abrigo"
                  : "No es necesario abrigo"}
              </p>
            </div>
          )}

          <h3 className="text-xl font-bold text-red-600 mt-3 w-full">
            Tareas Pendientes
          </h3>
          <ul className="list-disc pl-5">
            <li>Pagar monotributo</li>
            <li>Revisar gastos del mes</li>
            {/* Agrega más tareas según sea necesario */}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export { Dashboard };
