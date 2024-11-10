"use client";
import Image from "next/image";
import backgroundDesktop from "../../../public/background.png";
import { LoginGoogleBtn } from "@/components/buttons/LoginGoogleBtn";
import { useProtectedPage } from "@/hooks/uiHooks";

const LoginPage = () => {
  useProtectedPage();

  return (
    <div className="h-screen w-full flex flex-col sm:flex-row justify-center items-center bg-slate-50 sm:p-20">
      <div className="h-[500px] sm:h-full w-full sm:w-[450px] text-black flex justify-center items-center overflow-hidden sm:rounded-3xl relative">
        <Image
          src={backgroundDesktop}
          alt="Mobile illustrative image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="block sm:hidden" // Mostrar en móviles
        />

        <Image
          src={backgroundDesktop}
          alt="Desktop illustrative image"
          layout="fill"
          objectFit="cover"
          objectPosition="top right"
          className="hidden sm:block" // Mostrar en pantallas más grandes
        />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-black h-full sm:rounded-3xl p-10">
        <h2 className="font-bold text-2xl sm:text-3xl text-red-600 w-full text-center">
          Bienvenido a IngresosYa!
        </h2>
        <h4 className="p-10 sm:text-xl text-black/80 font-bold">
          Inicia Sesión
        </h4>
        <LoginGoogleBtn />
      </div>
    </div>
  );
};

export default LoginPage;
