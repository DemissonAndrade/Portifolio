
import "./hero.css"; // Importe o arquivo CSS

const Hero = () => {
  return (
    <div className="hero">
      {/* Linha animada */}
      <div className="animated-line"></div>

      {/* Conteúdo principal */}
      <div className="hero-content">
        <img
          src="../img/avatar.jpg"
          alt="Demisson Andrade"
          className="avatar"
        />
        <h1 className="hero-title">Demisson Andrade</h1>
        <p className="hero-subtitle">Desenvolvedor FullStack</p>
        <p className="hero-slogan">
          Transformando ideias em experiências digitais incríveis.
        </p>
      </div>
    </div>
  );
};

export default Hero;