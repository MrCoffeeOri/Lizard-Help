import React from 'react'
import { Link } from 'react-router-dom';
import { handleCorrection, RegexCorrections } from '../formCorrection';

export default function Client() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  
  return (
    <div id='client'>
      <Link to="/">
        <svg width="70" height="15" viewBox="0 0 66 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.289109 6.79289C-0.101415 7.18342 -0.101415 7.81658 0.289109 8.20711L6.65307 14.5711C7.04359 14.9616 7.67676 14.9616 8.06728 14.5711C8.45781 14.1805 8.45781 13.5474 8.06728 13.1569L2.41043 7.5L8.06728 1.84315C8.45781 1.45262 8.45781 0.819456 8.06728 0.428932C7.67676 0.0384079 7.04359 0.0384079 6.65307 0.428932L0.289109 6.79289ZM66.0039 6.5L0.996216 6.5V8.5L66.0039 8.5V6.5Z" fill="#c12626"/></svg>
      </Link>
      <section id='wellcome'>
        <div>
          <h2>Bem-vindo ao <span className='colored'>LizardHelp</span></h2>
          <p>Sua plataforma de suporte técnico amigável e eficiente. Aqui, estamos prontos para ajudá-lo a resolver qualquer problema que você possa encontrar. Com uma equipe dedicada e soluções rápidas, nossa missão é tornar sua experiência de suporte tão tranquila quanto possível.</p>
        </div>
        <img src="/clients.png" alt="" />
      </section>
      <section id='jump'>
        <h3>Seções</h3>
        <hr />
        <div>
          <a href="#news">Novidades</a>
          <a href="#news">Entrar</a>
        </div>
      </section>
      <section id='news'>
        <div id='display'>
          <span>Data: 26/07/2024</span>
          <img src="https://www.redhat.com/rhdc/managed-files/RHELAI_tech_icon.svg" alt="" />
          <h2>Novo Modelo de IA em Treinamento para o LizardHelp!</h2>
          <p>Estamos empolgados em anunciar que estamos no processo de treinamento de um novo modelo de inteligência artificial para o LizardHelp. Este modelo avançado promete melhorar ainda mais a experiência dos nossos usuários, fornecendo respostas mais rápidas e precisas.Nosso objetivo é garantir que o novo modelo seja capaz de lidar com uma ampla variedade de consultas e problemas, desde os mais simples até os mais complexos. Estamos comprometidos em oferecer um suporte técnico inteligente e eficiente em todos os momentos.Fique ligado para mais atualizações sobre o progresso do treinamento e as melhorias futuras que o novo modelo de IA trará para o LizardHelp!</p>
          <div>
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>
        <div id='lastUpdate'>
          <h3 style={{ marginTop: 0 }}>Ultima atualização: 26/02/2024</h3>
          <p>Modelo de IA adicionado <br />
          chave de atualização: <span className='colored'><a target='_blank' href="https://github.com/MrCoffeeOri/LizardChat/commit/aa30fb4d00080c8ddc72448cf277ad7ca773abe">aa30fb4d00080c8ddc72448cf277ad7ca773abe7</a></span></p>
          <span>Por: SrCoffee</span>
        </div>
      </section>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          id="token"
          placeholder='Chave de acesso'
          onChange={e => handleCorrection(e, e => e.target.value.match(/a/g /*TODO: Token RegexExp*/) != null)}
          required
        />
        <p>Chave de acesso incorreta</p>
        <input
          type="email"
          id="email"
          placeholder='Email da empresa'
          onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.email) != null)}
          required
        />
        <p>Email incorreto</p>
        <select id="type" required>
          <option value="Administrador">Administrador</option>
          <option value="Funcionário">Funcionário</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
