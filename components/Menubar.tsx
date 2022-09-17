import { LogoutButton } from "./styled";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Menubar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-end p-2">
      <div className="py-10px px-15px leading-none">{user.username}</div>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
};

export { Menubar };
