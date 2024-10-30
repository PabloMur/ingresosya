// Llamada a nuestro endpoint para obtener los datos del clima
export async function APIgetWeather() {
  const url = "/api/getWeather"; // Cambia la ruta según donde esté ubicado tu endpoint

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error al obtener datos del endpoint: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result.result; // Accedemos al objeto `result` devuelto por el endpoint
  } catch (error) {
    console.error("Error en APIgetWeather:", error);
    throw error;
  }
}
