// hooks/uiHooks.ts
import { useRecoilState } from "recoil";
import { usePathname, useRouter } from "next/navigation";
import { loaderAtom } from "@/lib/Atoms";
import { useSession, signOut } from "next-auth/react";

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
  return () => {
    if (status === "unauthenticated") {
      goto("/login");
    }
  };
};

export const useHandleLogout = () => {
  const goto = useGoto();
  return () => {
    signOut();
    goto("/login");
  };
};
