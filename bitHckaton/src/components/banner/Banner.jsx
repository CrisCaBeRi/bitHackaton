import "./BannerStyles.css";
import BannerImg from "./Assets/banner.jpg";

export const Banner = () => {
  return (
    <section className="banner">
      <picture>
        <img src={BannerImg} alt="" />
      </picture>

      <article>
        <h2>Bienvenido a Info Enfermedades!</h2>
        <p>Conoce la estadística de las enfermedades de tu región </p>
        <button>Revisa la estadística</button>
      </article>
    </section>
  );
};
