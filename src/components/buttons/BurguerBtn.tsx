"use client";
import { useBurgerBtn } from "@/hooks/uiHooks";
import burger from "../../../public/burger-menu-svgrepo-com.svg";
import cross from "../../../public/cross-svgrepo-com.svg";
import Image from "next/image";

const BurgerBtn = () => {
  const { menuState, handleMenuState } = useBurgerBtn();

  return (
    <button onClick={handleMenuState} className="sm:hidden">
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
