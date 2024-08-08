const SettingsPage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-100 overflow-y-auto w-full">
      {/* Título */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Configuraciones</h3>
      </div>

      {/* Configuraciones de Perfil */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Configuraciones de Perfil</h3>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Correo Electrónico:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contraseña:</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar Cambios
          </button>
        </form>
      </div>

      {/* Configuraciones de Notificaciones */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Configuraciones de Notificaciones</h3>
        <form className="mt-4 space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="emailNotifications"
              className="form-checkbox"
            />
            <label htmlFor="emailNotifications" className="text-sm font-medium">
              Notificaciones por correo electrónico
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="smsNotifications"
              className="form-checkbox"
            />
            <label htmlFor="smsNotifications" className="text-sm font-medium">
              Notificaciones por SMS
            </label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
