import { useNavigate } from "react-router-dom";
import "./habilidades.css"; // Importe o CSS

const Habilidades = () => {


  const cursos = [
    "Acessibilidade web: crie designs inclusivos",
    "Arquitetura CSS: descomplicando os problemas",
    "Consultas SQL: avançando no SQL com MySQL",
    "CSS Grid: simplificando layouts",
    "Expressões regulares: capturando textos de forma mágica",
    "Flexbox: posicione elementos na tela",
    "Git e Github: controle e compartilhe seu código",
    "HTML5 e CSS3 parte 1: crie uma página da Web",
    "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
    "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas",
    "HTML5 e CSS3 parte 4: avançando no CSS",
    "Java 8: conheça as novidades dessa versão",
    "Java Collections: Dominando Listas, Sets e Mapas",
    "Java e java.io: Streams, Reader e Writers",
    "Java e java.lang: programe com a classe Object e String",
    "Java e java.util: Coleções, Wrappers e Lambda expressions",
    "Java e JDBC: trabalhando com um banco de dados",
    "Java Exceções: aprenda a criar, lançar e controlar exceções",
    "Java JRE e JDK: compile e execute o seu programa",
    "Java OO: entendendo a Orientação a Objetos",
    "Java Polimorfismo: entenda herança e interfaces",
    "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
    "JavaScript e HTML: pratique lógica com desenhos, animações e um jogo",
    "JavaScript na Web: manipule o DOM com JavaScript",
    "JavaScript na Web: validação de Formulários e HTML5",
    "JavaScript: explorando a linguagem",
    "JavaScript: interfaces e Herança em Orientação a Objetos",
    "JavaScript: programando a Orientação a Objetos",
    "JavaScript: programando na linguagem da web",
    "JS na Web: Armazenando dados no navegador",
    "JS na web: CRUD com JavaScript assíncrono",
    "Layouts Responsivos: trabalhando com layouts mobile",
    "Lean Startup: primeiros passos da sua Startup enxuta",
    "Oracle Cloud Infrastructure: banco de dados e infraestrutura como código",
    "Oracle Cloud Infrastructure: implantação de uma aplicação na nuvem",
    "Python para Data Science",
    "SQL com MySQL: manipule e consulte dados",
  ];


  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    < div className="body">
      <button onClick={handleVoltar} className="button" >
        Voltar
      </button>

      <section id="habilidades" className="habilidades-section">

        <h1 className="habilidades-titulo">Meus Cursos
        </h1>
        <div className="cursos-lista">
          {cursos.map((curso, index) => (
            <div key={index} className="curso-item">
              {curso}
            </div>
          ))}
        </div>

      </section>
    </div>

  );
};

export default Habilidades;