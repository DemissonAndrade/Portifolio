
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // Importando ícones
import "./footer.css"; // Arquivo CSS para estilização

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-secondary">
          Desenvolvido por{" DemissonAndrade "}
          <a href="https://github.com/demissonAndrade" target="_blank" rel="noreferrer">

          </a>
        </p>

        {/* Ícones de redes sociais */}
        <div className="social-icons">
          <a
            href="https://github.com/demissonAndrade"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/demisson-andrade/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/demisson_andrade/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="mailto:demissondsa@gmail.com"
            aria-label="E-mail"
          >
            <FaEnvelope className="icon" />
          </a>
        </div>
        <strong>+55 (61) 992951411</strong>
        <p className="text-secondary">
          <small>
            <strong>2025 Fevereiro</strong>
            <br />
            <a href="mailto:demissondsa@gmail.com" target="_blank" rel="noreferrer">
              demissondsa@gmail.com
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;