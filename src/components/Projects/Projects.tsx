import { projects } from "../data/projects";
import Card from "../ui/Card";
import "./projects.css"; // Importe o CSS

const Projects = () => {
  return (
    <section id="/aviator" className="projects-section">
      <h2>Projetos</h2>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveDemo} // Link para o projeto
              target="_blank" // Abre em uma nova aba
              rel="noopener noreferrer" // Boa prática para links externos
              className="project-link" // Classe para estilização
            >
              <Card project={project} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;