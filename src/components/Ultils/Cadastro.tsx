
import { useNavigate } from "react-router-dom";



const Cadastro = () => {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1);
    };

    return (
        <div className="body">

            <button onClick={handleVoltar} className="button" >
                Voltar
            </button>


            <h1 className="hr">Cadastro e autenticação com token JWT (JSON Web Token)</h1>


            <img className="img" src="./public/cadastro.jpg" alt="cadastro" />


            <h1 className="hr">Aqui estão alguns dos meus projetos incríveis!</h1>


            <div className="pr">
                <div className="text">
                    <p>
                        O código será dividido em partes, e cada uma será explicada detalhadamente. Vamos usar <strong>Node.js</strong> com <strong>Express</strong>, <strong>MongoDB</strong> (para armazenamento de dados) e <strong>JWT</strong> para autenticação.
                    </p>

                    <h2>Estrutura Geral do Projeto</h2>
                    <p>
                        O projeto é organizado em pastas e arquivos que seguem uma arquitetura modular. Essa estrutura facilita a manutenção, escalabilidade e reutilização do código. As principais pastas e arquivos são:
                    </p>
                    <ul>
                        <li><strong>models/:</strong> Contém os modelos de dados que definem a estrutura dos documentos no banco de dados.</li>
                        <li><strong>controllers/:</strong> Contém a lógica de negócio, como cadastro, autenticação e outras operações.</li>
                        <li><strong>routes/:</strong> Define as rotas da aplicação e como elas se conectam aos controladores.</li>
                        <li><strong>middlewares/:</strong> Contém funções intermediárias que processam requisições antes de chegarem aos controladores (por exemplo, autenticação).</li>
                        <li><strong>config/:</strong> Armazena configurações globais, como a conexão com o banco de dados.</li>
                        <li><strong>.env:</strong> Arquivo de variáveis de ambiente para armazenar dados sensíveis, como chaves secretas e URIs de banco de dados.</li>
                        <li><strong>package.json:</strong> Lista as dependências do projeto e scripts para execução.</li>
                        <li><strong>server.js:</strong> Ponto de entrada da aplicação, onde o servidor é configurado e iniciado.</li>
                    </ul>

                    <h2>server.js (Ponto de Entrada)</h2>
                    <p>
                        O arquivo <code>server.js</code> é o ponto de entrada da aplicação. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Inicializar o servidor Express.</li>
                        <li>Configurar middlewares globais, como o processamento de JSON.</li>
                        <li>Conectar ao banco de dados MongoDB.</li>
                        <li>Definir as rotas principais da aplicação.</li>
                        <li>Iniciar o servidor na porta especificada.</li>
                    </ul>

                    <h2>models/User.js (Modelo de Dados)</h2>
                    <p>
                        O arquivo <code>User.js</code> define o modelo de dados do usuário usando o Mongoose. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Definir a estrutura do documento do usuário no banco de dados (campos como <code>username</code>, <code>email</code>, <code>password</code>, etc.).</li>
                        <li>Implementar métodos para hashear senhas antes de salvar no banco de dados.</li>
                        <li>Fornecer um método para comparar senhas durante o login.</li>
                        <li>Exportar o modelo para ser usado em outras partes da aplicação.</li>
                    </ul>

                    <h2>controllers/authController.js (Lógica de Negócio)</h2>
                    <p>
                        O arquivo <code>authController.js</code> contém a lógica de negócio relacionada à autenticação. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Implementar a função de cadastro (<code>register</code>), que valida os dados de entrada, verifica se o usuário já existe, hashea a senha e salva o novo usuário no banco de dados.</li>
                        <li>Implementar a função de login (<code>login</code>), que verifica as credenciais do usuário, compara a senha e gera um token JWT para autenticação.</li>
                        <li>Retornar respostas apropriadas (sucesso ou erro) para o cliente.</li>
                    </ul>

                    <h2>routes/authRoutes.js (Definição de Rotas)</h2>
                    <p>
                        O arquivo <code>authRoutes.js</code> define as rotas da aplicação relacionadas à autenticação. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Mapear as rotas para as funções correspondentes nos controladores (por exemplo, <code>/register</code> para cadastro e <code>/login</code> para login).</li>
                        <li>Proteger rotas que requerem autenticação usando um middleware de autenticação.</li>
                        <li>Exportar as rotas para serem usadas no <code>server.js</code>.</li>
                    </ul>

                    <h2>middlewares/authMiddleware.js (Middleware de Autenticação)</h2>
                    <p>
                        O arquivo <code>authMiddleware.js</code> contém o middleware que verifica a autenticidade do token JWT. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Verificar se o token JWT está presente no cabeçalho da requisição.</li>
                        <li>Decodificar o token e adicionar o ID do usuário à requisição (<code>req.userId</code>).</li>
                        <li>Retornar um erro se o token for inválido ou ausente.</li>
                        <li>Permitir que a requisição prossiga para o controlador se o token for válido.</li>
                    </ul>

                    <h2>config/db.js (Configuração do Banco de Dados)</h2>
                    <p>
                        O arquivo <code>db.js</code> contém a lógica para conectar ao banco de dados MongoDB. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Conectar ao banco de dados usando a URI fornecida no arquivo <code>.env</code>.</li>
                        <li>Exportar a função de conexão para ser usada no <code>server.js</code>.</li>
                    </ul>

                    <h2>.env (Variáveis de Ambiente)</h2>
                    <p>
                        O arquivo <code>.env</code> armazena variáveis de ambiente sensíveis, como:
                    </p>
                    <ul>
                        <li><strong>MONGO_URI:</strong> URI de conexão com o banco de dados MongoDB.</li>
                        <li><strong>JWT_SECRET:</strong> Chave secreta usada para assinar tokens JWT.</li>
                        <li><strong>PORT:</strong> Porta em que o servidor será executado.</li>
                    </ul>

                    <h2>package.json (Dependências)</h2>
                    <p>
                        O arquivo <code>package.json</code> lista as dependências do projeto e scripts para execução. Ele é responsável por:
                    </p>
                    <ul>
                        <li>Definir o nome, versão e scripts do projeto.</li>
                        <li>Listar as dependências necessárias, como <code>express</code>, <code>mongoose</code>, <code>dotenv</code>, <code>bcryptjs</code> e <code>jsonwebtoken</code>.</li>
                    </ul>

                    <h2>Fluxo de Funcionamento</h2>
                    <p>
                        O sistema funciona da seguinte maneira:
                    </p>
                    <ul>
                        <li><strong>Cadastro:</strong>
                            <ul>
                                <li>O cliente envia uma requisição POST para <code>/api/auth/register</code> com <code>username</code>, <code>email</code> e <code>password</code>.</li>
                                <li>O controlador <code>authController</code> valida os dados, verifica se o usuário já existe, hashea a senha e salva o novo usuário no banco de dados.</li>
                                <li>Um token JWT é gerado e retornado ao cliente.</li>
                            </ul>
                        </li>
                        <li><strong>Login:</strong>
                            <ul>
                                <li>O cliente envia uma requisição POST para <code>/api/auth/login</code> com <code>email</code> e <code>password</code>.</li>
                                <li>O controlador <code>authController</code> verifica as credenciais, compara a senha e gera um token JWT.</li>
                                <li>O token é retornado ao cliente para autenticação futura.</li>
                            </ul>
                        </li>
                        <li><strong>Rota Protegida:</strong>
                            <ul>
                                <li>O cliente envia uma requisição para uma rota protegida (por exemplo, <code>/api/auth/protected</code>) com o token JWT no cabeçalho <code>Authorization</code>.</li>
                                <li>O middleware <code>authMiddleware</code> verifica o token e adiciona o ID do usuário à requisição.</li>
                                <li>O controlador processa a requisição e retorna uma resposta.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Cadastro;