import { FormEvent, useContext } from "react";
import AppContext from "../context/AppContext";
import Container from "./Container";
import Input from "./Input";

const Header = () => {
  const { ipAddress, setIpAddress } = useContext(AppContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(ipAddress);
  };

  return (
    <header className="bg-neutral-400 pt-8 pattern-bg">
      <Container>
        <h1 className="text-xl text-neutral-200 font-medium text-center lg:text-2xl">
          IP Address Tracker
        </h1>
        <form
          onSubmit={onSubmit}
          className="mt-8 pb-40 flex justify-center w-full"
        >
          <Input value={ipAddress} onChange={setIpAddress} />
        </form>
      </Container>
    </header>
  );
};

export default Header;
