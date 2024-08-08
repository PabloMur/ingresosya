const ProfilePage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-100 w-full">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Información Personal</h3>
        <p className="mt-2">
          <strong>Nombre:</strong> Juan Pérez
        </p>
        <p className="mt-2">
          <strong>Edad:</strong> 28
        </p>
        <p className="mt-2">
          <strong>Experiencia:</strong> 2 años como repartidor
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Datos de Contacto</h3>
        <p className="mt-2">
          <strong>Email:</strong> juan.perez@example.com
        </p>
        <p className="mt-2">
          <strong>Teléfono:</strong> +54 9 11 1234 5678
        </p>
        <p className="mt-2">
          <strong>Dirección:</strong> Calle Falsa 123, Mar del Plata
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex-1 overflow-y-auto">
        <h3 className="text-xl font-bold">Historial de Entregas Recientes</h3>
        <ul className="divide-y">
          <li className="py-2 flex justify-between">
            <span>Pedido #12345</span>
            <span>Entregado el 28/07/2024</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Pedido #12346</span>
            <span>Entregado el 27/07/2024</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Pedido #12347</span>
            <span>Entregado el 26/07/2024</span>
          </li>
          {/* Agrega más entregas según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
