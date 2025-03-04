import { useNavigate } from "react-router-dom";


const DashBoard = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="body">
      {/* Botão para voltar */}
      <button onClick={handleVoltar} className="button">
        Voltar
      </button>

      {/* Título do Dashboard */}
      <h1 className="hr">Dashboard de Vendas</h1>

      {/* Imagem ilustrativa */}
      <img className="img" src="./public/img/DsVendas.png" alt="Dashboard de Vendas" />

      {/* Descrição do Dashboard */}
      <h1 className="hr">Aqui estão algumas das métricas incríveis do seu negócio!</h1>

      {/* Conteúdo do Dashboard */}
      <div className="pr">
        <div className="text">
          <p>
            Este dashboard é uma aplicação que combina várias tecnologias e bibliotecas para criar um sistema de monitoramento de vendas em tempo real. Vamos detalhar cada parte do código e sua função:
          </p>

          <h2>Bibliotecas Utilizadas</h2>
          <p>
            <strong>React:</strong> Uma biblioteca para criar interfaces de usuário interativas e responsivas.
          </p>
          <p>
            <strong>Recharts:</strong> Uma biblioteca para criar gráficos e visualizações de dados.
          </p>
          <p>
            <strong>React Router:</strong> Para gerenciar a navegação entre páginas.
          </p>

          <h2>Estrutura do Código</h2>
          <p>
            <strong>Componente Principal:</strong> O componente <code>DashBoard</code> é responsável por exibir as métricas de vendas, gráficos e filtros.
          </p>
          <p>
            <strong>Navegação:</strong> O botão "Voltar" permite retornar à página anterior usando o <code>useNavigate</code> do React Router.
          </p>
          <p>
            <strong>Visualização de Dados:</strong> O dashboard exibe KPIs (Indicadores-Chave de Desempenho) e gráficos para análise de vendas.
          </p>

          <h2>Funcionalidades do Dashboard</h2>
          <p>
            <strong>KPIs:</strong> Exibe métricas importantes, como receita total, ticket médio e crescimento mensal.
          </p>
          <p>
            <strong>Gráficos:</strong> Mostra tendências de vendas ao longo do tempo, distribuição por região e desempenho por produto.
          </p>
          <p>
            <strong>Filtros:</strong> Permite filtrar os dados por período, região ou categoria.
          </p>
          <p>
            <strong>Interatividade:</strong> Os gráficos e tabelas são interativos, permitindo que o usuário explore os dados em detalhes.
          </p>

          <h2>Casos de Uso</h2>
          <p>
            <strong>Monitoramento de Vendas:</strong> Acompanhe o desempenho das vendas em tempo real.
          </p>
          <p>
            <strong>Análise de Tendências:</strong> Identifique padrões e sazonalidades nas vendas.
          </p>
          <p>
            <strong>Tomada de Decisão:</strong> Use os dados para tomar decisões estratégicas, como investir em determinadas regiões ou produtos.
          </p>

          <h2>Considerações Finais</h2>
          <p>
            Este dashboard é uma ferramenta poderosa para monitorar e analisar as vendas do seu negócio. Ele pode ser adaptado para diferentes necessidades, como adicionar novas métricas, integrar com APIs ou exportar relatórios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;