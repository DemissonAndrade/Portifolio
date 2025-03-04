
import { useNavigate } from "react-router-dom";


const Projetos = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="body">
      
      <button onClick={handleVoltar} className="button" >
        Voltar
      </button>

      
      <h1 className="hr">Robot Aviator</h1>

     
      <img className="img" src="./public/aviator.jpg" alt="Robô Aviator"/>

       
        <h1 className="hr">Aqui estão alguns dos meus projetos incríveis!</h1>

       
        <div className="pr">
          <div className="text">
            <p>
              Este código é uma aplicação Node.js que combina várias tecnologias e bibliotecas para criar um sistema de previsão em tempo real baseado em dados coletados da web. Vamos detalhar cada parte do código e sua função:
            </p>

            <h2>Bibliotecas Utilizadas</h2>
            <p><strong>Puppeteer:</strong> Uma biblioteca para controlar o navegador Chrome/Chromium de forma programática. É usada para fazer scraping de dados de uma página web.</p>
            <p><strong>Express:</strong> Um framework para Node.js que facilita a criação de servidores web e APIs.</p>
            <p><strong>HTTP:</strong> Módulo nativo do Node.js para criar servidores HTTP.</p>
            <p><strong>WebSocket (ws):</strong> Uma biblioteca para implementar comunicação bidirecional em tempo real entre o cliente e o servidor.</p>
            <p><strong>TensorFlow.js (tfjs-node):</strong> Uma biblioteca de machine learning que permite treinar e executar modelos diretamente em Node.js.</p>
            <p><strong>TensorFlow.js Node Utilities (normalize, denormalize):</strong> Funções para normalizar e desnormalizar dados, o que é comum em pré-processamento de dados para modelos de machine learning.</p>

            <h2>Estrutura do Código</h2>
            <p><strong>Inicialização do Servidor Express e WebSocket:</strong> O servidor Express é configurado para servir arquivos estáticos e receber requisições JSON. Um servidor WebSocket é criado para enviar atualizações em tempo real para os clientes conectados.</p>
            <p><strong>Configurações e Estado Global:</strong></p>
            <ul>
              <li><strong>WINDOW_SIZE:</strong> Define o tamanho da janela temporal usada para previsões.</li>
              <li><strong>INITIAL_DATA_SIZE:</strong> Define a quantidade mínima de dados necessária para iniciar o treinamento do modelo.</li>
              <li><strong>PREDICTION_INTERVAL:</strong> Define o intervalo de tempo (em milissegundos) entre as previsões.</li>
              <li><strong>dataBuffer:</strong> Um buffer que armazena os dados coletados.</li>
              <li><strong>normalizationStats:</strong> Armazena estatísticas de normalização (média e variância) para os dados.</li>
            </ul>

            <p><strong>Inicialização do Modelo LSTM:</strong> Um modelo de rede neural LSTM (Long Short-Term Memory) é criado usando TensorFlow.js. Este tipo de modelo é adequado para previsões em séries temporais. O modelo é compilado com o otimizador Adam e a função de perda meanSquaredError.</p>

            <p><strong>Pré-processamento de Dados:</strong> A função <code>preprocessData</code> normaliza os dados e cria janelas temporais (features) e valores alvo (targets) para o treinamento do modelo.</p>

            <p><strong>Cálculo de Volatilidade:</strong> A função <code>calculateVolatility</code> calcula a volatilidade dos dados, que é usada para definir um limite (threshold) para as previsões.</p>

            <p><strong>Previsão em Tempo Real:</strong> A função <code>predictNextValue</code> usa o modelo LSTM para prever o próximo valor com base nos dados mais recentes.</p>

            <p><strong>Treinamento do Modelo:</strong> A função <code>trainModel</code> treina o modelo LSTM usando os dados coletados. O treinamento é feito em 30 épocas com um tamanho de lote de 16.</p>

            <p><strong>Scraping de Dados:</strong> A função <code>startScraping</code> usa o Puppeteer para coletar dados de uma página web específica (<a href="https://www.tipminer.com/historico/betfair/aviator" target="_blank">https://www.tipminer.com/historico/betfair/aviator</a>). Os dados coletados são processados e adicionados ao <code>dataBuffer</code>. Se o buffer tiver dados suficientes, o modelo é treinado e uma previsão é feita. A previsão e o limite de volatilidade são enviados para os clientes via WebSocket.</p>

            <p><strong>Inicialização do Servidor:</strong> O servidor é iniciado na porta 5000. O modelo LSTM é inicializado e o scraping de dados começa.</p>

            <p><strong>Rota Principal:</strong> A rota '/' serve um arquivo HTML (<code>index.html</code>) que provavelmente contém a interface do usuário para visualizar as previsões.</p>

            <p><strong>WebSocket:</strong> Quando um cliente se conecta via WebSocket, ele recebe atualizações em tempo real das previsões e do histórico de dados.</p>

            <h2>Casos de Uso</h2>
            <p><strong>Previsão de Séries Temporais:</strong> O modelo LSTM é adequado para prever valores futuros em séries temporais, como preços de ações, temperaturas, ou qualquer outro dado que varie ao longo do tempo.</p>
            <p><strong>Scraping de Dados:</strong> O Puppeteer é usado para coletar dados de páginas web que não fornecem APIs públicas.</p>
            <p><strong>Comunicação em Tempo Real:</strong> O WebSocket permite que os clientes recebam atualizações em tempo real sem precisar recarregar a página.</p>

            <h2>Considerações Finais</h2>
            <p>Este código é um exemplo complexo que combina várias tecnologias para criar um sistema de previsão em tempo real. Ele pode ser adaptado para diferentes fontes de dados e tipos de previsão, dependendo das necessidades do projeto.</p>
          </div>
        </div>
        
    </div>

  );
};


export default Projetos;