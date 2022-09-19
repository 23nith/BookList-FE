import { LogoutButton } from "./styled";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { setCurrentUser } from "../api/setCurrentUser";

const Menubar = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setCurrentUser(setUser);
  }, []);

  return (
    <div className="flex justify-end p-2">
      <div className="py-10px px-15px leading-none">{user.username}</div>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
};

export { Menubar };
