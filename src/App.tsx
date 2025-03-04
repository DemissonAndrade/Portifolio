import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/routes/root";
import Projetos from "./components/Ultils/Projetos";
import Habilidades from "./components/Habilidades/Habilidades";
import Contact from "./components/Ultils/Contact";
import Cadastro from "./components/Ultils/Cadastro";
import CardMovie from "./components/Ultils/DashBoard";
import SkillImage from "./components/Skills/SkillsImage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/aviator" element={<Projetos />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/CardMovie" element={< CardMovie/>} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/skill/:id" element={<SkillImage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;