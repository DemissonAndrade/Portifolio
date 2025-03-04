import { useNavigate } from "react-router-dom";
import { skills } from "../data/skills"; // Ajuste o caminho conforme necessário
import './skills.css';
import { useEffect } from "react";

const SkillsList = () => {
  const navigate = useNavigate();

  const handleSkillClick = (id: number) => {
    navigate(`/skill/${id}`); // Redireciona para a rota da imagem
  };

  // Adiciona o evento de mouse para exibir o balão
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imageUrl = item.getAttribute('data-image');
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.style.backgroundImage = `url(${imageUrl})`;
        item.appendChild(tooltip);
      });

      item.addEventListener('mouseleave', () => {
        const tooltip = item.querySelector('.skill-tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });

    return () => {
      skillItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="skills-container">
      <h1>Certificados</h1>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="skill-item"
            onClick={() => handleSkillClick(skill.id)} // Redireciona ao clicar
            data-image={skill.image} // Adiciona o caminho da imagem
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;