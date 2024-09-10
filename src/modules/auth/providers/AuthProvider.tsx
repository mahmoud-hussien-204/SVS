import {createContext, useRef, useState} from "react";

import AuthHelper from "../helpers/AuthHelper";

import {EnumUserRole} from "@/enums";

type IBasePath = `/${IUserRole}`;

interface IAuthContext {
  isLoggedIn: boolean;
  userData: null | IUser;
  saveUser: (user: IUser) => void;
  basePath: IBasePath;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  userData: null,
  saveUser: () => {},
  basePath: `/${EnumUserRole.user}`,
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({children}: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthHelper.userIsLoggedIn());

  const getUserDataInit = AuthHelper.getUserData();

  const [userData, setUserData] = useState<IUser | null>(getUserDataInit);

  const basePath = useRef<IBasePath>(`/${getUserDataInit?.role || EnumUserRole.user}`);

  const saveUser = (user: IUser) => {
    AuthHelper.setUserData(user);
    AuthHelper.setUserIsLoggedIn(true);
    basePath.current = `/${user.role}`;
    setUserData(user);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, userData, saveUser, basePath: basePath.current}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
