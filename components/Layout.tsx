import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Menubar } from "./Menubar";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-100vh select-none">
      <Menubar />
      <div className="flex justify-center grow">
        <div className="max-w-840 flex flex-row h-full w-full">
          <Navbar />
          <div className="grow-5 h-full p-5 max-w-610 max-h-[250px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
