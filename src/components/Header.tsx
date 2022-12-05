import Container from "./Container";
import Input from "./Input";

const Header = () => {
  return (
    <header className="bg-neutral-400 pt-8 pattern-bg">
      <Container>
        <h1 className="text-xl text-neutral-200 font-medium text-center lg:text-2xl">
          IP Address Tracker
        </h1>
        <form className="mt-8 pb-40 flex justify-center w-full">
          <Input />
        </form>
      </Container>
    </header>
  );
};

export default Header;
