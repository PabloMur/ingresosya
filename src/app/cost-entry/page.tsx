const CostEntryPage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-200 overflow-y-auto w-full">
      {/* Entrada de Costos de Combustible */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Entrada de Costos de Combustible</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Monto ($):</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el costo de combustible"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha:</label>
            <input type="date" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
      </div>

      {/* Entrada de Costos de Monotributo */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Entrada de Costos de Monotributo</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Monto ($):</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el costo de monotributo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha:</label>
            <input type="date" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
      </div>

      {/* Entrada de Otros Costos */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Entrada de Otros Costos</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Descripción:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese la descripción del costo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Monto ($):</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese el monto del costo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha:</label>
            <input type="date" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CostEntryPage;
