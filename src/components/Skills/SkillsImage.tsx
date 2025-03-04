import './skills.css'
import { useParams } from "react-router-dom";
import { skills } from "../data/skills"; // Ajuste o caminho conforme necessário

const SkillImage = () => {
  const { id } = useParams<{ id: string }>();
  const skill = skills.find((s) => s.id === Number(id));

  if (!skill) {
    return <div>Habilidade não encontrada.</div>;
  }

  return (
    <div className="skill-image-container">
      <h2>{skill.name}</h2>
      <img src={skill.image} alt={skill.name} className="skill-image" />
    </div>
  );
};

export default SkillImage;