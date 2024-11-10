import { CloseSession } from "./buttons/CloseSession";
import NavigationBtn from "./ui/NavigationBtn";
import settings from "../../public/settings.svg";
import income from "../../public/income.svg";
import cost from "../../public/cost.svg";
import profile from "../../public/profile.svg";
import reports from "../../public/reports.svg";
import home from "../../public/home.svg";
import support from "../../public/support.svg";
import tasks from "../../public/tasks.svg";
import { useHideComponent } from "@/hooks/uiHooks";

const Sidebar = () => {
  const active = !useHideComponent(["/login", "/welcome"]);
  return (
    active && (
      <aside className="hidden text-black bg-white border-r-2  h-[90vh] md:w-1/5 md:min-w-[250px] md:flex flex-col justify-between items-center">
        <ul className="flex flex-col justify-start items-start w-full p-5">
          <NavigationBtn route={"/"} icon={home}>
            Inicio
          </NavigationBtn>
          <NavigationBtn route={"/profile"} icon={profile}>
            Perfil
          </NavigationBtn>
          <NavigationBtn route={"/settings"} icon={settings}>
            Configuraciones
          </NavigationBtn>
          <NavigationBtn route={"/reports"} icon={reports}>
            Reportes
          </NavigationBtn>
          <NavigationBtn route={"/cost-entry"} icon={cost}>
            Costos
          </NavigationBtn>
          <NavigationBtn route={"/income"} icon={income}>
            Ingresos
          </NavigationBtn>
          <NavigationBtn route={"/tasks"} icon={tasks}>
            Tareas
          </NavigationBtn>
          <NavigationBtn route={"/support"} icon={support}>
            Soporte
          </NavigationBtn>
        </ul>
        <div className="pb-5">
          <CloseSession></CloseSession>
        </div>
      </aside>
    )
  );
};

export { Sidebar };
