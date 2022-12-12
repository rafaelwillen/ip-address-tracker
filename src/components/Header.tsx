import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import Card from "./Card";
import Container from "./Container";
import Input from "./Input";

const Header = () => {
  const [ipAddress, setIpAddress] = useState("");
  const isLoading = true;

  const ipAddressRegex =
    /^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/g;

  const ipAddressSchema = z.string().regex(ipAddressRegex);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!ipAddressSchema.safeParse(ipAddress).success) {
      toast.error("Invalid IP Address");
      return;
    }
  };

  return (
    <header className="bg-neutral-400 pt-8 pattern-bg ">
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
        <section
          className={`bg-neutral-100 rounded-xl text-center py-7 border border-neutral-300 absolute ${
            isLoading ? "-bottom-10" : "-bottom-[60%]"
          } left-1/2 w-11/12 -translate-x-1/2 lg:flex lg:-bottom-1/4 lg:py-10 lg:px-8 lg:text-left lg:justify-center`}
        >
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <>
              <Card heading="IP Address" value="192.168.1.10" />
              <Card heading="Location" value="Luanda, Angola" />
              <Card heading="Timezone" value="UTC +01:00" />
              <Card heading="ISP" value="SpaceX Starlink" />
            </>
          )}
        </section>
      </Container>
    </header>
  );
};

export default Header;
