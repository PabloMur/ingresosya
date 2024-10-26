"use client";
import { useSession } from "next-auth/react";

const WelcomeMessage = () => {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(" ")[0];
  return (
    <p className="text-black font-bold">Bienvenido de nuevo {firstName} 👋</p>
  );
};

export { WelcomeMessage };
