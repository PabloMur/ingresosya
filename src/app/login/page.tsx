"use client";
import Image from "next/image";
import background from "../../../public/background.png";
import { LoginGoogleBtn } from "@/components/buttons/LoginGoogleBtn";
import { useProtectedPage } from "@/hooks/uiHooks";
import { useEffect } from "react";

const LoginPage = () => {
  const protectedPage = useProtectedPage();

  useEffect(() => {
    protectedPage();
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white border-t-2 p-20">
      <div className="h-full w-1/2 text-black flex justify-center items-center p-20 overflow-hidden rounded-3xl relative">
        <Image
          src={background}
          alt="illustrative image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center text-black h-full rounded-3xl p-10">
        <h2 className="font-bold text-3xl text-red-600">
          Bienvenido a IngresosYa!
        </h2>
        <h4 className="p-10 text-xl text-black/80">Inicia Sesión</h4>
        <LoginGoogleBtn />
      </div>
    </div>
  );
};
export default LoginPage;
