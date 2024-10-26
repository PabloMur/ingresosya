"use client";
import Image from "next/image";
import googleIcon from "../../../public/google-icon.svg";
import { useSignin } from "@/hooks/uiHooks";

const LoginGoogleBtn = () => {
  const signIn = useSignin();

  const handleSignIn = () => signIn();

  return (
    <button
      className="text-black p-4 rounded-full flex justify-center items-center gap-2 shadow-lg"
      onClick={handleSignIn}
    >
      <Image src={googleIcon} alt="google icon" width={30} height={30}></Image>
      <p>Ingresar con Google</p>
    </button>
  );
};

export { LoginGoogleBtn };
