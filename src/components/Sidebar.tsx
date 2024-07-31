import { CloseSession } from "./buttons/CloseSession";
import { NavigationBtn } from "./ui/NavigationBtn";
import settings from "../../public/settings.svg";
import income from "../../public/income.svg";
import cost from "../../public/cost.svg";
import profile from "../../public/profile.svg";
import reports from "../../public/reports.svg";
import home from "../../public/home.svg";
import support from "../../public/support.svg";

const Sidebar = () => {
  return (
    <aside className="text-black bg-white border-r-2  h-[90vh] w-1/5 flex flex-col justify-between items-center">
      <ul className="flex flex-col justify-start items-start w-full px-5">
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
          Registro de Costos
        </NavigationBtn>
        <NavigationBtn route={"/income"} icon={income}>
          Registro de Ingresos
        </NavigationBtn>
        <NavigationBtn route={"/support"} icon={support}>
          Soporte
        </NavigationBtn>
      </ul>
      <CloseSession />
    </aside>
  );
};

export { Sidebar };
