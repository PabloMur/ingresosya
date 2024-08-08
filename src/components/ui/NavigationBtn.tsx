import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface NavigationBtnProps {
  route: string;
  children: ReactNode;
  icon?: string; // Cambié a string para especificar la URL del icono
}

const NavigationBtn = ({ route, children, icon }: NavigationBtnProps) => {
  return (
    <Link href={route} className="w-full rounded-xl hover:shadow-lg ">
      <div className="font-bold p-3  w-full flex items-center cursor-pointer">
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

export { NavigationBtn };
