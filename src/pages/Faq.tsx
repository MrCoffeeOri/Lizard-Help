import React from 'react'
import CopyRight from '../components/CopyRight';
import GoBack from '../components/GoBack';

  export default function Faq() {
    const toggleAnswerVisibility = (id : string) => {
      document.getElementById(`answer-${id}`).classList.toggle("hide")
      document.getElementById(id).querySelector("span").classList.toggle('active'); // Adiciona ou remove a classe 'active'
    }
      const faqs = [
          {
            question: "O que é o sistema LizardHelp?",
            answer: "O sistema LizardHelp é uma plataforma para gerenciar e resolver solicitações de suporte técnico ou administrativo de forma eficiente, permitindo que os usuários relatem problemas e acompanhem suas soluções.",
          },
          {
            question: "Como posso abrir um ticket de suporte?",
            answer: "Você pode abrir um ticket de suporte acessando a seção 'Abrir Ticket' no menu principal do sistema, preenchendo o formulário com detalhes do problema e clicando em 'Enviar'.",
          },
          {
            question: "Posso acompanhar o status do meu ticket?",
            answer: "Sim, você pode acompanhar o status do seu ticket na seção 'Meus Tickets'. Lá, você verá o progresso e as atualizações realizadas pela equipe de suporte.",
          },
          {
            question: "O que significa cada status do ticket?",
            answer: "Aberto: O ticket foi criado e está aguardando análise. Em Andamento: O ticket está sendo tratado pela equipe de suporte. Resolvido: O problema foi solucionado. Fechado: O ticket foi encerrado.",
          },
          {
            question: "Como priorizar um ticket?",
            answer: "Ao abrir um ticket, você pode selecionar o nível de prioridade: Baixa, Média ou Alta. Recomendamos usar Alta prioridade apenas para problemas urgentes.",
          },
          {
            question: "O sistema envia notificações sobre meus tickets?",
            answer: "Sim, você receberá notificações por e-mail ou dentro do sistema para atualizações importantes, como mudança de status ou solicitações de mais informações.",
          },
          {
            question: "Quem tem acesso aos tickets criados?",
            answer: "Apenas você, a equipe de suporte e o gestor do sistema têm acesso aos tickets que você cria. A confidencialidade é garantida.",
          },
          {
            question: "Posso anexar arquivos ao abrir um ticket?",
            answer: "Sim, você pode anexar arquivos, como capturas de tela ou documentos, ao preencher o formulário do ticket. Isso ajuda a equipe de suporte a entender melhor o problema.",
          },
          {
            question: "Quanto tempo leva para o suporte resolver meu problema?",
            answer: "O tempo de resolução varia de acordo com a prioridade e a complexidade do problema. A equipe de suporte se esforça para atender todas as solicitações no menor tempo possível.",
          },
          {
            question: "Como entrar em contato com a equipe de suporte fora do sistema?",
            answer: "Caso não consiga acessar o sistema, você pode entrar em contato com a equipe de suporte enviando um e-mail para support@lizardhelp.com ou ligando para o número 1-800-LIZARD-HELP disponível em todo rodapé de página.",
          },
        ];
        
    return (
      <div id="faq">    
        <header>
          <GoBack to="/"/>
          <img id='logo' src="./logoName.webp" alt="LizardHelp Logo" />
        </header>
          <div id='titleFaq'>
            <div>
              <img src='./faq.webp'/><div className='infoText'> <p> Alguma dúvida? Nosso FAQ está para ajudar!</p><span>A página de FAQ (Perguntas Frequentes) foi criada para ajudar você a encontrar respostas rápidas para as dúvidas mais comuns sobre nossos serviços. </span> </div>
            </div>
          </div>

          <div className="questions">
              <p> Aqui está as perguntas mais frequentes a respeito de nosso sistema e serviços. </p>
              <ul>
                  {faqs.map((faq, index) => (
                    <div>
                        <li id={index.toString()} key={index}>
                          <h3> {faq.question} <span onClick={() => toggleAnswerVisibility(index.toString())}> + </span> </h3>
                        
                        </li>
                          <div id={`answer-${index}`} className="answer hide"> <p> {faq.answer}</p></div>
                      </div>
                  ))}
              </ul>
  
          </div>
          <CopyRight/>
      </div>
    );
}
  
  
  
