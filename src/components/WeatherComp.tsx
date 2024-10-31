"use client";
import { useWeather } from "@/hooks/uiHooks";

function WeatherComp() {
  const { loading, data, error } = useWeather();

  if (loading) {
    return (
      <div className="bg-blue-100 p-4 rounded-lg shadow-lg mb-4 animate-pulse">
        <h3 className="text-lg font-bold mb-2">Cargando clima...</h3>
        <p className="bg-blue-200 h-4 mb-2 rounded"></p>
        <p className="bg-blue-200 h-4 mb-2 rounded"></p>
        <p className="bg-blue-200 h-4 mb-2 rounded"></p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-lg font-bold mb-2">Error al cargar el clima</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg mb-2">
      <h3 className="text-sm font-bold text-center">{data?.location.name}</h3>

      <div className="flex items-center">
        <img
          src={data?.current.condition.icon}
          alt={data?.current.condition.text}
          className="w-10 h-10 mr-2"
        />
        <p className="text-xl font-bold">{`${data?.current.temp_c}°C`}</p>
      </div>

      <p className="text-gray-700">{`ST: ${data?.current.feelslike_c}°C`}</p>
      <p className="text-gray-700">{`Viento: ${data?.current.wind_kph} km/h ${data?.current.wind_dir}`}</p>
      <p className="text-gray-700">{`Humedad: ${data?.current.humidity}%`}</p>
    </div>
  );
}

export default WeatherComp;
