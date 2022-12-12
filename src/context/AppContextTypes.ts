import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  ipAddress: string;
  setIpAddress: Dispatch<SetStateAction<string>>;
};
