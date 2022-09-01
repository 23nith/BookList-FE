import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Navbar from "./Navbar";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="flex flex-col h-100vh">
      <div className="border-2 border-red border-solid flex justify-end p-2">
        <button></button>
        <button>Logout</button>
      </div>
      <div className="flex justify-center border-2 border-black border-solid grow">
        <div className="max-w-840 flex flex-row h-full w-full">
          <Navbar />
          <div className="grow-5 border-2 border-blue border-solid h-full bg-blue-200 p-5 max-w-610">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
