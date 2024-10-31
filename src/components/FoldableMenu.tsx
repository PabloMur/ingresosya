"use client";
import { useFoldableMenu } from "@/hooks/uiHooks";
import { CloseSession } from "./buttons/CloseSession";
import NavigationBtn from "@/components/ui/NavigationBtn";
import settings from "../../public/settings.svg";
import income from "../../public/income.svg";
import cost from "../../public/cost.svg";
import profile from "../../public/profile.svg";
import reports from "../../public/reports.svg";
import home from "../../public/home.svg";
import support from "../../public/support.svg";
import tasks from "../../public/tasks.svg";

const FoldableMenu = () => {
  const { menuActive, handleMenuState } = useFoldableMenu();

  return (
    menuActive && (
      <ul className="absolute top-[10vh] left-0 bg-white w-full h-[90vh] z-20 flex flex-col justify-start items-center p-10">
        <NavigationBtn route={"/"} icon={home} handler={handleMenuState}>
          Inicio
        </NavigationBtn>
        <NavigationBtn
          route={"/profile"}
          icon={profile}
          handler={handleMenuState}
        >
          Perfil
        </NavigationBtn>
        <NavigationBtn
          route={"/settings"}
          icon={settings}
          handler={handleMenuState}
        >
          Configuraciones
        </NavigationBtn>
        <NavigationBtn
          route={"/reports"}
          icon={reports}
          handler={handleMenuState}
        >
          Reportes
        </NavigationBtn>
        <NavigationBtn
          route={"/cost-entry"}
          icon={cost}
          handler={handleMenuState}
        >
          Costos
        </NavigationBtn>
        <NavigationBtn
          route={"/income"}
          icon={income}
          handler={handleMenuState}
        >
          Ingresos
        </NavigationBtn>
        <NavigationBtn route={"/tasks"} icon={tasks} handler={handleMenuState}>
          Tareas
        </NavigationBtn>
        <NavigationBtn
          route={"/support"}
          icon={support}
          handler={handleMenuState}
        >
          Soporte
        </NavigationBtn>
        <CloseSession />
      </ul>
    )
  );
};

export { FoldableMenu };
