// hooks/uiHooks.ts
import { useRecoilState } from "recoil";
import { usePathname, useRouter } from "next/navigation";
import { foldableMenuAtom, loaderAtom } from "@/lib/Atoms";
import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { APIgetWeather } from "@/lib/ApiCall";
import burger from "../../../public/burger-menu-svgrepo-com.svg";
import cross from "../../../public/cross-svgrepo-com.svg";

export const useLoader = (): [boolean, () => void] => {
  const [loaderState, setLoaderState] = useRecoilState(loaderAtom);
  const toggleLoader = () => setLoaderState((prevState) => !prevState);
  return [loaderState, toggleLoader];
};

export const useHideComponent = (routes: string[]): boolean => {
  const pathname = usePathname();

  // Retorna true si la ruta actual coincide con alguna de las rutas en el array
  return routes.includes(pathname);
};

export const useGoto = () => {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
};

export const useProtectedPage = () => {
  const { data: session, status } = useSession();
  const goto = useGoto();
  if (status === "unauthenticated") {
    goto("/login");
  }
};

export const useSignin = () => {
  return () => {
    signIn("google", { callbackUrl: "/" });
  };
};
export const useHandleLogout = () => {
  return () => {
    signOut({ callbackUrl: "/welcome" });
  };
};

export const useStartBtnHook = () => {
  const goto = useGoto();
  const { data: session, status } = useSession();

  return () => {
    if (status === "unauthenticated") goto("/login");
    else {
      goto("/");
    }
  };
};

export const useWeather = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const weatherData = await APIgetWeather();
      setData(weatherData);
    } catch (error) {
      setError("Error al cargar el clima");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return { data, loading, error };
};

//Este hook lo que permite es ver el stado del atomo ligado al menu desplegable y ademas me retorna una funcion para activar
//desactivar el mencionado menu
export const useBurgerBtn = () => {
  const [menuState, setMenuState] = useRecoilState(foldableMenuAtom);

  const handleMenuState = () => {
    setMenuState(!menuState);
  };

  return { menuState, handleMenuState, burger, cross };
};

export const useFoldableMenu = () => {
  const [menuActive, setMenuState] = useRecoilState(foldableMenuAtom);
  const handleMenuState = () => {
    setMenuState(!menuActive);
  };
  return { menuActive, handleMenuState };
};

export const useWelcomeMessage = () => {
  const { data: session, status } = useSession();
  const active = status === "authenticated";
  const firstName = session?.user?.name?.split(" ")[0];
  const firstLetterName = firstName?.[0];

  return { active, firstName, firstLetterName };
};
