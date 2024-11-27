"use client";
import { useHideComponent } from "@/hooks/uiHooks";
import { Logo } from "./ui/Logo";
import { BurgerBtn } from "@/components/buttons/BurguerBtn";
import { FoldableMenu } from "./FoldableMenu";
import { WelcomeMessage } from "./ui/WelcomeMessage";

const Header = () => {
  const active = !useHideComponent(["/", "/login", "/welcome"]);

  return (
    active && (
      <header className="bg-white h-[10vh] p-3 px-10 flex justify-between items-center border-b-2 relative">
        <Logo />
        <WelcomeMessage />
        <BurgerBtn />
        <FoldableMenu />
      </header>
    )
  );
};

export { Header };
