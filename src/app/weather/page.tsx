"use client";

import React, { useEffect, useState } from "react";

// Datos de clima semanales simulados
const fetchWeeklyWeather = async () => {
  // Aquí se podría llamar a una API real para obtener los datos
  return [
    { day: "Lunes", temperature: 22, description: "Parcialmente nublado" },
    { day: "Martes", temperature: 24, description: "Soleado" },
    { day: "Miércoles", temperature: 20, description: "Lluvia ligera" },
    { day: "Jueves", temperature: 18, description: "Nublado" },
    { day: "Viernes", temperature: 25, description: "Soleado" },
    { day: "Sábado", temperature: 23, description: "Soleado" },
    { day: "Domingo", temperature: 21, description: "Parcialmente nublado" },
  ];
};

const WeatherPage = () => {
  const [weeklyWeather, setWeeklyWeather] = useState<any[]>([]);

  useEffect(() => {
    const getWeeklyWeather = async () => {
      const data = await fetchWeeklyWeather();
      setWeeklyWeather(data);
    };
    getWeeklyWeather();
  }, []);

  return (
    <div className="bg-slate-100 h-[90vh] p-4 overflow-y-auto w-full">
      <h1 className="text-xl font-bold mb-2 text-black">Desglose del Clima</h1>
      <div className="bg-white p-3 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-bold mb-1 text-black">Clima Actual</h2>
        <p className="text-black text-sm">
          Descripción: {weeklyWeather[0]?.description || "Desconocido"}
        </p>
        <p className="text-black text-sm">
          Temperatura: {weeklyWeather[0]?.temperature || "--"}°C
        </p>
        <p className="text-black text-sm">
          Sugerencia:{" "}
          {weeklyWeather[0]?.temperature < 15
            ? "Usa abrigo"
            : "No es necesario abrigo"}
        </p>
      </div>

      <h2 className="text-lg font-bold mb-2 text-black">Pronóstico Semanal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {weeklyWeather.map((dayWeather, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center text-sm"
          >
            <h3 className="text-md font-bold text-black">{dayWeather.day}</h3>
            <p className="text-black">{dayWeather.description}</p>
            <p className="text-black">
              Temperatura: {dayWeather.temperature}°C
            </p>
            <p className="text-black">
              Sugerencia:{" "}
              {dayWeather.temperature < 15
                ? "Usa abrigo"
                : "No es necesario abrigo"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherPage;
