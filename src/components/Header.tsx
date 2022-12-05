import Container from "./Container";
import Input from "./Input";

const Header = () => {
  return (
    <header className="bg-neutral-400 pt-8 pattern-bg">
      <Container>
        <h1 className="text-xl text-neutral-300 text-center">
          IP Address Tracker
        </h1>
        <form className="mt-8 pb-40 text-center">
          <Input />
        </form>
      </Container>
    </header>
  );
};

export default Header;
