const Footer = () => {
  return (
    <footer>
      {" "}
      <nav id="promo">
        Projet créé dans le cadre d'une formation au
        <a
          target="_blank"
          href="https://www.lereacteur.io"
          rel="noreferrer"
          id="promo-reacteur"
        >
          <img src="./logo-reacteur.jpeg" alt="yo" />
          Réacteur
        </a>{" "}
        (promo ORION-2022)
        <br />
        par{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christophe-lafon-549788243"
          rel="noreferrer"
          id="promo-perso"
        >
          <img src="./logo-linkedin.png" alt="yo" />
          Christophe Lafon
        </a>
        <a
          target="_blank"
          href="https://github.com/stinkyFerret01"
          rel="noreferrer"
          id="promo-github"
        >
          <img src="./github.png" alt="yo" />
          StinkyFerret01
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
