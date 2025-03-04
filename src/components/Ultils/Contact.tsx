
import { useNavigate } from "react-router-dom";
import './contact.css'

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

            
            <img className="img" src="./public/avatar.jpg" alt="cadastro" />


            <h1 className="hr"> Demisson Andrade  </h1>


            <div className="pr">
                <div className="text">
                    <p>
                        Sempre fui apaixonado por tecnologia, mas a vida o levou por um caminho diferente. Há 15 anos, começei a trabalhar como serralheiro em uma empresa de médio porte. No início, era apenas um emprego temporário, uma forma de garantir o sustento, mas o tempo passou e me tornou um profissional experiente na área. Dominava a fabricação de portões, grades e estruturas metálicas com precisão e dedicação. Meu trabalho era valorizado, e construi uma trajetória sólida dentro da empresa.

                        Porém, o desejo de mudar de área nunca desapareceu. Sempre que tinha um tempo livre, explorava o mundo da tecnologia, assistia a vídeos sobre programação, lia artigos e sonhava em trabalhar com desenvolvimento de sistemas. Foi então que decidi dar um passo importante: ingressei na IESB faculdade de Análise e Desenvolvimento de Sistemas.

                        Durante os anos de estudo, dividi meu tempo entre o trabalho na serralheria e os estudos. Não foi fácil conciliar a rotina pesada de trabalho com as aulas e os projetos acadêmicos, mas persisti. Aprendi sobre linguagens de programação, banco de dados, desenvolvimento web e segurança da informação. Cada novo conhecimento adquirido me motivava ainda mais a seguir em frente.

                        Agora, formado e com uma base sólida na área de tecnologia, sinto que chegou o momento de fazer a transição de carreira. Eu sei que a experiência como serralheiro me trouxe habilidades valiosas, como disciplina, trabalho em equipe e resolução de problemas, que podem ser aplicadas no mundo da tecnologia. Meu objetivo é ingressar no mercado de desenvolvimento de software, buscando oportunidades que me permitam crescer e me especializar ainda mais.

                        Mesmo com receios sobre a mudança, eu entendo que nunca é tarde para seguir um novo caminho. Estou me preparando para o mercado, aprimorando meu portfólio e participando de cursos e projetos para ganhar experiência prática. Determinado e motivado, eu acredito que, assim como moldava o ferro para criar estruturas sólidas, agora está moldando meu próprio futuro para construir uma nova carreira na tecnologia.
                    </p>

                </div>
            </div>
        </div>
    );
};


export default Cadastro;