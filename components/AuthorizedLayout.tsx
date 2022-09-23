import { useContext, useEffect, ReactNode } from "react";
import { setCurrentUser } from "../api/auth/setCurrentUser";
import { UserContext } from "../contexts/UserContext";

interface AuthorizedLayoutProps {
  children: ReactNode;
}

const AuthorizedLayout = ({ children }: AuthorizedLayoutProps) => {
  const { user, setUser } = useContext(UserContext);

  const handleUnauthorized = () => {
    // logout function
    // redirect user
    // show error message
    // console.log("unauthorized");
  };

  useEffect(() => {
    if (user) {
      return;
    }

    setCurrentUser(setUser, handleUnauthorized);
  }, []);

  if (user) return children;

  return null;
};

export { AuthorizedLayout };
