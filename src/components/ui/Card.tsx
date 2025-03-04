
interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
}

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Card;