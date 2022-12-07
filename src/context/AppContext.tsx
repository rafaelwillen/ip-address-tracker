import { createContext, FC, ReactNode, useState } from "react";
import { AppContextType } from "./AppContextTypes";

const AppContext = createContext<AppContextType>({} as AppContextType);
export default AppContext;

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [ipAddress, setIpAddress] = useState("");

  return (
    <AppContext.Provider value={{ ipAddress, setIpAddress }}>
      {children}
    </AppContext.Provider>
  );
};
