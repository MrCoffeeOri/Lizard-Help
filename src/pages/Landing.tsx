import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LinkScroll from '../components/LinkScroll';

export default function Landing() {
  useEffect(() => {
    const header = document.querySelector("header")
    addEventListener("scroll", () => {
      header.style.height = scrollY > 0 ? "3vh" : "7vh"
      header.style.background = scrollY > 0 ? "linear-gradient(to right, var(--red-main), var(--red-main-darker))" : ""
      header.style.boxShadow = scrollY > 0 ? "0 0 11px 0 black" : "";
      (header.children[0] as HTMLImageElement).style.display = scrollY > 0 ? "none" : "block";
      (header.children[0] as HTMLImageElement).style.transform = scrollY > 0 ? "scale(0)" : "scale(1)";
      (header.children[1].lastChild as HTMLAnchorElement).style.display = scrollY > 400 ? "" : "none"
    })
  }, [])

  return (
    <div id="landing">
      <header>
        <img id='logo' src="./logoName.webp" alt="LizardHelp Logo" />
        <div>
          <a href='#about'>
            <p>Sobre</p>
            <div></div>
          </a>
          <a href='#features'>
            <p>Recursos</p>
            <div></div>
          </a>
          <a href='#contacts'>
            <p>Contatos</p>
            <div></div>
          </a>
          <LinkScroll to='/client'>
            <p>Área do cliente</p>
            <div></div>
          </LinkScroll>
          <LinkScroll to='/start' style={{ display: 'none' }}>
            <p>Começe agora</p>
            <div></div>
          </LinkScroll>
        </div>
    </header>
      <main>
        <section id='presentation'>
          <div>
            <h2>Um sistema completo de Help Desk que vai gerar mais eficiência para o seu Suporte de TI!</h2>
            <Link to="/start">Começe agora!</Link>
          </div>
          <img src="./management.webp" />
        </section>
        <section>
          <h2 style={{ textAlign: 'center', padding: '0px 90px' }}>O sistema de Help Desk da LizardHelp é projetado para <span className="marked">organizar</span>, <span className="marked">controlar</span> e <span className="marked">otimizar</span> processos, oferecendo uma centralização completa da comunicação com o cliente. Todos os recursos necessários estão disponíveis para uso ilimitado por agente, garantindo uma experiência fluida e eficiente.</h2>
        </section>
        <section id='about'>
          <img src="./team.svg" alt="" />
          <div>
            <div style={{ padding: "0 50px" }}>
              <h2>Sobre nós</h2>
              <p>LizardHelp é o seu destino único para todas as suas necessidades de suporte técnico. Quer você seja uma empresa que busca melhorar o suporte ao cliente ou um indivíduo que busca assistência técnica, nós temos o que você precisa.</p>
            </div>
            <div id='cards'>
              <div className='card' id='team'>
                <img src="./worker.webp" alt="" />
                <h2>Time Dev</h2>
                <p>Estamos focados em criar um helpdesk excepcional, unindo talento técnico e compreensão do usuário para superar expectativas. Vamos mostrar nossa competência e entregar excelência.</p>
              </div>
              <div className='card' id='product'>
                <img src="./wrench.webp" alt="" />
                <h2>Produto</h2>
                <p><i>LizardHelp</i> representa a excelência em suporte, fruto da nossa competência técnica e profundo entendimento das necessidades dos usuários. Vamos superar expectativas e oferecer uma experiência excepcional.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='features'>
          <img src="./idea.svg" alt="" />
          <h2>Recursos</h2>
          <ul>
            <li>Suporte ao cliente 24 horas por dia</li>
            <li>Tempos de resposta rápidos</li>
            <li>Técnicos Especialistas</li>
            <li>Sistema de Bilheteira Fácil</li>
            <li>Comunicação segura</li>
            <li>Atualizações constantes</li>
          </ul>
        </section>
        <section id='contacts'>
          <h2>Contate-nos</h2>
          <p>Tem uma pergunta ou precisa de ajuda? Entre em contato com nossa equipe de suporte em support@lizardhelp.com ou ligue para 1-800-LIZARD-HELP.</p>
        </section>
      </main>
    </div>
  );
};