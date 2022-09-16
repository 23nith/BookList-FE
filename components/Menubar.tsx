import type { NextPage } from "next";
import { LogoutButton } from "./styled";

const Menubar: NextPage = () => {
  return (
    <div className="flex justify-end p-2">
      <div className="py-10px px-15px leading-none">Luke</div>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
};

export { Menubar };
