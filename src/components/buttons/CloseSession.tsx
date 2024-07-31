"use client";
import { useState } from "react";

const CloseSession = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full p-3 flex justify-center items-center">
      <button
        className="bg-red-600 font-bold rounded-full p-2 px-3 text-white"
        onClick={handleOpenModal}
      >
        Cerrar Sesión
      </button>

      {isModalOpen && (
        <div className="fixed bg-black/10 top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
          {/* Este es el modal */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg w-1/3">
            <div className="p-4 border-b flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
            <div className="p-4">
              <p className="text-center py-4 font-bold">
                ¿Seguro que deseas cerrar la sesión?
              </p>
              <div className="border-t-2 mt-4 pt-4 flex justify-end space-x-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Sí, cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { CloseSession };
