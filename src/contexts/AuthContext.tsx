import { createContext, useContext, useEffect, useState } from "react";
import { Permission } from "@/types/permission.type";

interface AuthContextValue {
  company: any;
  setCompany: (company: any) => void;
  view: "user" | "admin";
  changeView: () => void;
  userPermissions: Permission[];
  setUserPermissions: (permissions: Permission[]) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  company: null,
  setCompany: () => { },
  view: "user",
  changeView: () => { },
  userPermissions: [],
  setUserPermissions: () => { },
});

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userPermissions, setUserPermissions] = useState<Permission[]>([]);
  const [company, setCompany] = useState(null);
  const [view, setView] = useState<"admin" | "user">("user");

  useEffect(() => {
    let storedView = localStorage.getItem("view");
    if (storedView && (storedView === "user" || storedView === "admin")) {
      setView(storedView);
    }
  }, []);

  // const isSuperUser = (): boolean => {
  //   if (session && session.user && session.user.role) {
  //     let role = session?.user?.role;
  //     if (role === ROLE.SUPERUSER || role === ROLE.SUB_SUPERUSER) {
  //       return true;
  //     } else return false;
  //   } else return false;
  // };

  const changeView = () => {
    if (view === "admin") {
      setView("user");
      localStorage.setItem("view", "user");
      window.location.replace("/");
    } else if (view === "user") {
      localStorage.setItem("view", "admin");
      setView("admin");
      window.location.replace("/");
    }
  };

  return (
    <AuthContext.Provider value={{ company, setCompany, view, changeView, userPermissions, setUserPermissions }}>
      {children}
    </AuthContext.Provider>
  );
};
