const SupportPage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-200 overflow-y-auto w-full">
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Preguntas Frecuentes</h3>
        <ul className="mt-4 space-y-4">
          <li>
            <strong>¿Cómo registro mis gastos?</strong>
            <p>
              Para registrar tus gastos, ve a la sección de Entrada de Costos y
              completa los campos requeridos.
            </p>
          </li>
          <li>
            <strong>¿Cómo visualizo mi historial de ingresos?</strong>
            <p>
              Puedes ver tu historial de ingresos en la sección de Historial
              Reciente en tu tablero.
            </p>
          </li>
          <li>
            <strong>¿Cómo actualizo mi perfil?</strong>
            <p>
              Para actualizar tu perfil, dirígete a la sección de Perfil y edita
              la información deseada.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Formulario de Contacto</h3>
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
            <label className="block text-sm font-medium">Mensaje:</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Ingrese su mensaje"
              rows={4}
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-bold">Ayuda Urgente</h3>
        <p className="mt-4">
          Si necesitas ayuda urgente, puedes contactarnos directamente a nuestro
          número de soporte o enviar un correo electrónico a
          soporte@ejemplo.com.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded mt-4">
          Llamar al Soporte
        </button>
      </div>
    </div>
  );
};

export default SupportPage;
