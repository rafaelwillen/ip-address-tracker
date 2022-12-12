import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto px-6 xl:max-w-6xl relative">
      {children}
    </div>
  );
};

export default Container;
