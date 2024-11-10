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

  const navigationButtons = [
    { route: "/", icon: home, label: "Inicio" },
    { route: "/profile", icon: profile, label: "Perfil" },
    { route: "/settings", icon: settings, label: "Configurar" },
    { route: "/reports", icon: reports, label: "Reportes" },
    { route: "/cost-entry", icon: cost, label: "Costos" },
    { route: "/income", icon: income, label: "Ingresos" },
    { route: "/tasks", icon: tasks, label: "Tareas" },
    { route: "/support", icon: support, label: "Soporte" },
  ];

  return (
    menuActive && (
      <div className="absolute top-[10vh] left-0 bg-black/70 w-full h-[90vh] z-20 flex flex-col justify-start items-start">
        <div className="h-full w-3/4 bg-white p-10 flex flex-col justify-between">
          <ul>
            {navigationButtons.map(({ route, icon, label }) => (
              <NavigationBtn
                key={route}
                route={route}
                icon={icon}
                handler={handleMenuState}
              >
                {label}
              </NavigationBtn>
            ))}
          </ul>
          <CloseSession />
        </div>
      </div>
    )
  );
};

export { FoldableMenu };
