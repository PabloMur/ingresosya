"use client";
import { useGoto } from "@/hooks/uiHooks";

const WelcomePage = () => {
  const goto = useGoto();

  return (
    <div className="bg-white h-screen w-full flex justify-center items-center">
      <div className="h-full w-full md:w-1/2 p-8 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-red-600 mb-4">IngresosYa!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Controla tus ingresos y gastos desde un solo lugar
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Una herramienta de gestión hecha por y para Riders
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-500 transition">
          Comenzar
        </button>
      </div>
      <div className="h-full w-full md:w-1/2 hidden md:flex justify-center items-center py-20">
        <div className="bg-red-400 h-full w-full rounded-tl-3xl rounded-bl-3xl">
          imagenes que cambian
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
