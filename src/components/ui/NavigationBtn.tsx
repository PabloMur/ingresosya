import Image from "next/image";
import Link from "next/link";
import { ReactNode, memo } from "react";

interface NavigationBtnProps {
  route: string;
  children: ReactNode;
  icon?: string;
  handler?: () => void;
}

const NavigationBtn = ({
  route,
  children,
  icon,
  handler,
}: NavigationBtnProps) => {
  return (
    <Link href={route} className="w-full rounded-xl hover:shadow-lg text-black">
      <div
        className="font-bold p-3 w-full flex items-center cursor-pointer"
        onClick={handler || undefined} // Solo asigna `handler` si está definido
      >
        {icon && (
          <span className="mr-2">
            <Image src={icon} alt="icon" width={20} height={20} />
          </span>
        )}
        {children}
      </div>
    </Link>
  );
};

// Envuelve el componente con `memo` para evitar renders innecesarios
export default memo(NavigationBtn);
