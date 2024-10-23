"use client";
import { RecoilRoot } from "recoil";
import { Loader } from "./ui/Loader";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { AuxSidebar } from "./AuxSidebar";
import { SessionProvider } from "next-auth/react";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <SessionProvider>
        <Loader />
        <Header />
        <div className="flex w-full">
          <Sidebar />
          <div className="flex w-full">
            {children}
            <AuxSidebar />
          </div>
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
};

export { CustomLayout };
