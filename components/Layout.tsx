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
        <div className="sm:max-w-840 max-w-full h-fit flex sm:flex-row flex-col sm:h-full w-full">
          <Navbar />
          <div className="grow-5 h-full p-5 sm:max-w-610 max-h-[250px] max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
