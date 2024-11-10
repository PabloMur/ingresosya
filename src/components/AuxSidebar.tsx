"use client";
import { useHideComponent } from "@/hooks/uiHooks";
import Link from "next/link";
import WeatherComp from "./WeatherComp";
import { TasksAuxSidebar } from "./TasksAuxSidebar";

const AuxSidebar = () => {
  const active = !useHideComponent(["/login", "/welcome"]);

  return (
    active && (
      <div className="hidden md:block bg-white w-[320px] border-l-2 text-black">
        <aside className="p-6 overflow-y-auto h-full flex flex-col">
          <div className="border-b pb-3 mb-4">
            <p className="font-bold mb-2">Atajos</p>
            <Link
              href={"/income"}
              className="bg-red-600 rounded-xl p-3 font-bold text-white w-full text-center block cursor-pointer"
            >
              Ingresar balance
            </Link>
          </div>

          <WeatherComp></WeatherComp>
          <TasksAuxSidebar></TasksAuxSidebar>
        </aside>
      </div>
    )
  );
};

export { AuxSidebar };
