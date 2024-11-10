"use client";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { foldableMenuAtom } from "@/lib/Atoms";
import burgerIcon from "../../../public/burger-menu-svgrepo-com.svg";
import crossIcon from "../../../public/cross-svgrepo-com.svg";

// Componente que muestra el icono de líneas (menú)
const LinesIcon = () => (
  <Image src={burgerIcon} alt="burger icon" height={50} width={50} />
);

// Componente que muestra el icono de cruz (cerrar)
const CrossIcon = () => (
  <Image src={crossIcon} alt="cross icon" height={50} width={50} />
);

const BurgerBtn = () => {
  const [menuState, setMenuState] = useRecoilState(foldableMenuAtom);

  const handleMenuState = () => {
    setMenuState(!menuState);
  };

  return (
    <button onClick={handleMenuState} className="md:hidden">
      {menuState ? <CrossIcon /> : <LinesIcon />}
    </button>
  );
};

export default BurgerBtn;
