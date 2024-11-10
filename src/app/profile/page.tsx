import { PersonalInfo } from "@/components/PersonalInfo";
import pencil from "../../../public/pencil.svg";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="p-6 h-[90vh] flex flex-col space-y-6 text-black bg-slate-100 w-full">
      <div className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-lg">Mis Datos</h3>
        <Link href={"/settings"}>
          <button className="flex items-center space-x-1 rounded-lg bg-green-600 p-2 text-white text-sm">
            <p className="font-bold">Editar</p>
            <Image src={pencil} alt="Editar" width={20} height={20} />
          </button>
        </Link>
      </div>

      <PersonalInfo />

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
    </div>
  );
};

export default ProfilePage;
