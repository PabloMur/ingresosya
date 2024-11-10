"use client";
import { useBurgerBtn } from "@/hooks/uiHooks";
import Image from "next/image";

const BurgerBtn = () => {
  const { menuState, handleMenuState, burger, cross } = useBurgerBtn();

  return (
    <button onClick={handleMenuState} className="md:hidden">
      <Image
        src={menuState ? cross : burger}
        alt="menu icon"
        height={50}
        width={50}
      ></Image>
    </button>
  );
};

export { BurgerBtn };
