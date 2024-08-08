const IncomePage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-200 overflow-y-auto w-full">
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Registro de Ingresos Diarios</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Día:</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Seleccione el día"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Hora de Ingreso:
            </label>
            <input
              type="time"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese la hora de inicio"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Hora de Finalización:
            </label>
            <input
              type="time"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese la hora de finalización"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Total Generado en la App ($):
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el total generado en la app"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Total de Propina Recibida en Mano ($):
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el total de propina recibida en mano"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Monto Inicial en Caja ($):
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el monto inicial en caja"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Monto Final en Caja ($):
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el monto final en caja"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Costo de Combustible ($):
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el costo de combustible"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncomePage;
