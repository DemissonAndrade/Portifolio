import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isProjetosOpen, setIsProjetosOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isTransparent, setIsTransparent] = useState(true);

    const toggleProjetosDropdown = () => {
        setIsProjetosOpen(!isProjetosOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Verifica se a página foi rolada para baixo ou para cima
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            // Define a transparência com base na posição de rolagem
            if (currentScrollPos > 50) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar ${visible ? "" : "hide"} ${isTransparent ? "transparent" : ""}`}>
            <nav className="navbar-container">
                <div className="name">
                    {'Demisson Andrade'}
                    <Link to="/" className="navbar-link navbar-brand">
                        {/* Brand/Link */}
                    </Link>
                </div>
                {/* Hamburger Menu (Mobile) */}
                <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
                <label htmlFor="navbar-toggle" className="navbar-toggle-label">
                    <span className="hamburger"></span>
                </label>

                {/* Links de Navegação */}
                <div className="navbar-links">
                    {/* Link de Projetos com Dropdown */}
                    <div className="navbar-dropdown">
                        <span onClick={toggleProjetosDropdown} className="navbar-link">
                            Projetos {isProjetosOpen ? " " : " "} {/* Ícone de seta */}
                        </span>
                        {isProjetosOpen && ( // Renderiza o dropdown se isProjetosOpen for true
                            <div className="dropdown-content">
                                <Link to="/aviator" className="dropdown-link">
                                    Robot Aviator
                                </Link>
                                <Link to="/Cadastro" className="dropdown-link">
                                    Cadastro
                                </Link>
                                <Link to="/Cardmovie" className="dropdown-link">
                                    DashBoard
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Outros Links */}
                    <Link to="/Habilidades" className="navbar-link">
                        Cursos
                    </Link>
                    <Link to="/contact" className="navbar-link">
                        Sobre mim
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;