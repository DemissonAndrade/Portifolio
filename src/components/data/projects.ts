export const projects = [
  {
    id: 1,
    title: "Cadastro de usuários com Autenticação Token ",
    description:
      "Este projeto é uma API segura para cadastro e autenticação de usuários. Ele permite que novos usuários se registrem, façam login e acessem rotas protegidas utilizando tokens JWT (JSON Web Token). O sistema garante a segurança dos dados com criptografia de senhas usando bcrypt e segue boas práticas de autenticação.",
    image: "/public/img/cadastro.jpg",
    techStack: ["JavaScript", "MongoDB"],
    liveDemo: "./Cadastro",
    github: "github.com/DemissonAndrade",
  },

  {
    id: 2,
    title: "Dashboard de Vendas ",
    description:
      "Um dashboard de vendas é uma ferramenta poderosa que combina coleta de dados, processamento, visualização e análise para fornecer insights valiosos sobre o desempenho das vendas. Com os métodos e funcionalidades certos, ele se torna essencial para qualquer negócio que deseja crescer e se manter competitivo.",
    image: "/public/img/DsVendas.png",
    techStack: ["TypeScript", "MySql", "Spring Tools"],
    liveDemo: "",
    github: "github.com/DemissonAndrade",
  },

  {
    id: 'Projetos',
    title: "Robot Aviator",
    description:
      "Este código é uma aplicação Node.js que combina várias tecnologias e bibliotecas para criar um sistema de previsão em tempo real baseado em dados coletados da web. Puppeteer: Uma biblioteca para controlar o navegador Chrome/Chromium de forma programática. É usada para fazer scraping de dados de uma página web. Express: Um framework para Node.js que facilita a criação de servidores web e APIs. HTTP: Módulo nativo do Node.js para criar servidores HTTP.WebSocket (ws): Uma biblioteca para implementar comunicação bidirecional em tempo real entre o cliente e o servidor. TensorFlow.js (tfjs-node): Uma biblioteca de machine learning que permite treinar e executar modelos diretamente em Node.js. TensorFlow.js Node Utilities (normalize, denormalize): Funções para normalizar e desnormalizar dados, o que é comum em pré-processamento de dados para modelos de machine learning. ",
    image: "/public/img/aviator.jpg",
    techStack: [
      "JavaScript",
      "Puppeteer",
      "Express",
      "WebSocket (ws)",
      "TensorFlow.js (tfjs-node)",
    ],
    liveDemo: "./aviator",
    github: "github.com/DemissonAndrade",
  }, // Adicione mais projetos...
];




