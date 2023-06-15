import logo from "./Assets/logo.png"

export const Header = () => {
  return (
    <>
      <header>
        <picture><img src={logo} alt="" /></picture>
        <nav>
          <button>Home</button>
          <button>Enfermedad</button>
          <button>About US</button>                   
        </nav>
      </header>
    </>
  );
};
