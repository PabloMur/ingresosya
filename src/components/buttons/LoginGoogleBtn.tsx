"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../../../public/google-icon.svg";
const LoginGoogleBtn = () => {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <button
      className="text-black border border-black/50 p-4 rounded-lg flex justify-center items-center gap-2"
      onClick={handleSignIn}
    >
      <Image src={googleIcon} alt="google icon" width={30} height={30}></Image>
      <p>Ingresar con Google</p>
    </button>
  );
};

export { LoginGoogleBtn };
