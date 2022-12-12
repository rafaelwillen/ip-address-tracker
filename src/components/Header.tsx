import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { z } from "zod";
import { getGeolocationData } from "../api";
import Card from "./Card";
import Container from "./Container";
import Input from "./Input";

const Header = () => {
  const [ipAddress, setIpAddress] = useState("");
  const { isLoading, data, mutate, status, isIdle } = useMutation(
    (address: string) => getGeolocationData(address)
  );

  const isError = status === "error" || data?.isp === "";

  const ipAddressRegex =
    /^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/g;

  const ipAddressSchema = z.string().regex(ipAddressRegex);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!ipAddressSchema.safeParse(ipAddress).success) {
      toast.error("Invalid IP Address");
      return;
    }
    mutate(ipAddress);
  };

  return (
    <header className="bg-neutral-400 pt-8 pattern-bg ">
      <Container>
        <h1 className="text-xl text-neutral-200 font-medium text-center lg:text-2xl">
          IP Address Tracker
        </h1>
        <form
          onSubmit={onSubmit}
          className="mt-8 pb-40 flex flex-col gap-2 text-center items-center w-full"
        >
          <Input value={ipAddress} onChange={setIpAddress} />
          <button
            type="button"
            className="underline text-neutral-200"
            onClick={() => mutate("")}
          >
            Use my current IP address
          </button>
        </form>
        <section
          className={`bg-neutral-100 rounded-xl text-center py-7 border border-neutral-300 absolute ${
            isLoading ? "-bottom-10" : "-bottom-[60%]"
          } left-1/2 w-11/12 -translate-x-1/2 lg:flex lg:-bottom-1/4 lg:py-10 lg:px-8 lg:text-left lg:justify-center`}
        >
          {isIdle ? (
            <>
              <Card heading="IP Address" />
              <Card heading="Location" />
              <Card heading="Timezone" />
              <Card heading="ISP" />
            </>
          ) : isLoading ? (
            <span className="loader"></span>
          ) : isError ? (
            <p className="font-bold text-lg text-neutral-400">
              Error On Getting Geolocation
            </p>
          ) : (
            <>
              <Card heading="IP Address" value={data?.ip} />
              <Card
                heading="Location"
                value={`${data?.location.city}, ${data?.location.country}`}
              />
              <Card
                heading="Timezone"
                value={`UTC ${data?.location.timezone}`}
              />
              <Card heading="ISP" value={data?.as.name} />
            </>
          )}
        </section>
      </Container>
    </header>
  );
};

export default Header;
