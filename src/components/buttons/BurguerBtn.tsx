"use client";
import { useBurgerBtn } from "@/hooks/uiHooks";

interface ButtonProps {
  handler: () => void; // Función que será llamada al hacer clic
}

const Cross = ({ handler }: ButtonProps) => {
  return <button onClick={handler}>Cross</button>;
};

const Lines = ({ handler }: ButtonProps) => {
  return <button onClick={handler}>Lines</button>; // Cambié "Cross" por "Lines" para que sea más representativo
};

const BurgerBtn = () => {
  const { menuState, handleMenuState } = useBurgerBtn();

  return menuState ? (
    <Cross handler={handleMenuState} />
  ) : (
    <Lines handler={handleMenuState} />
  );
};

export { BurgerBtn };
