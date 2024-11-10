"use client";
import { useSession } from "next-auth/react";
const PersonalInfo = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Información Personal</h3>
      <p className="mt-2">
        <strong>Nombre:</strong> {session?.user?.name}
      </p>
      <p className="mt-2">
        <strong>Edad:</strong> 30
      </p>
      <p className="mt-2">
        <strong>Experiencia:</strong> 6 años como repartidor
      </p>
    </div>
  );
};

export { PersonalInfo };
