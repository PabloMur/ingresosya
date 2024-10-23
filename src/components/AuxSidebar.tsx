"use client";
import { useHideComponent, useLoader } from "@/hooks/uiHooks";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const AuxSidebar = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [loaderState, toggleLoader] = useLoader();
  const active = !useHideComponent(["/login", "/welcome"]);

  useEffect(() => {
    const getWeather = async () => {
      const weatherData = await fetchWeather();
      setWeather(weatherData);
    };
    getWeather();
  }, []);

  return (
    active && (
      <div className="hidden md:block bg-white w-[320px] border-l-2 text-black">
        <aside className="p-6 overflow-y-auto h-full">
          <div className="border-b pb-3 mb-4">
            <p className="font-bold mb-2">Atajos</p>
            <Link
              href={"/income"}
              className="bg-red-600 rounded-xl p-3 font-bold text-white w-full text-center block"
            >
              Ingresar balance
            </Link>
          </div>

          {/* Tarjeta de Clima */}
          {weather && (
            <div className="bg-blue-100 p-4 rounded-lg shadow-lg mb-4">
              <h3 className="text-lg font-bold mb-2">Clima Actual</h3>
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

          <div>
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Tareas Pendientes
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pagar monotributo</li>
              <li>Revisar gastos del mes</li>
              {/* Agrega más tareas según sea necesario */}
            </ul>
          </div>
        </aside>
      </div>
    )
  );
};

export { AuxSidebar };
