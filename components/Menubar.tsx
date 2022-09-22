import { LogoutButton } from "./styled";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { logout } from "../api/logout";
import { useRouter } from "next/router";

const Menubar = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push("/");
  };

  return (
    <div className="flex justify-end p-2">
      <div className="py-10px px-15px leading-none">{user.username}</div>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </div>
  );
};

export { Menubar };
