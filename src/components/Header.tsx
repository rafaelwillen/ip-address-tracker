import { FormEvent, useContext } from "react";
import { z } from "zod";
import AppContext from "../context/AppContext";
import Container from "./Container";
import Input from "./Input";

const Header = () => {
  const { ipAddress, setIpAddress } = useContext(AppContext);

  const ipAddressRegex =
    /^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/g;

  const ipAddressSchema = z.string().regex(ipAddressRegex);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!ipAddressSchema.safeParse(ipAddress).success) {
      // TODO: Show Error
      return;
    }
    // TODO: Fetch Data
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
