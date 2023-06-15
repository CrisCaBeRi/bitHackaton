import Logo from "./Assets/logo.png";
import Facebook from "./Assets/facebook.png";
import Instagram from "./Assets/instagram.png";
import Twitter from "./Assets/twitter.png";


export const Footer = () => {
  return (
    <>
      <footer>
        <picture>
          <img src={Logo} alt="" />
        </picture>
        <p>Copyrghts reserved 2023</p>
        <ul>
          <li><picture><img src={Facebook} alt="" /></picture></li>
          <li><picture><img src={Instagram} alt="" /></picture></li>
          <li><picture><img src={Twitter} alt="" /></picture></li>
        </ul>

      </footer>
    </>
  );
};
