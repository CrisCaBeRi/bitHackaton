import {Header} from "./Header";
import {Footer} from "./Footer";
import "./HeaderStyles.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
