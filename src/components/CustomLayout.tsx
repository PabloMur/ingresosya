"use client";
import { RecoilRoot } from "recoil";
import { Loader } from "./ui/Loader";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Loader />
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </RecoilRoot>
  );
};

export { CustomLayout };
