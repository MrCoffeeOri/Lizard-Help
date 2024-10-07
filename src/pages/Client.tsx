import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { handleCorrection, RegexCorrections } from '../helpers/formCorrection';
import GoBack from '../components/GoBack';
import CopyRight from '../components/CopyRight';

export default function Client() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const [userType, setUserType] = useState<String>("")
  
  useEffect(() => {
    location.hash == "#login" && document.getElementById("login").scrollIntoView()
  }, [])

  return (
    <div id='client'>
      <GoBack to="/"/>
      <section id='wellcome'>
        <div>
          <h2>Bem-vindo ao <span className='colored'>LizardHelp</span></h2>
          <p>Sua plataforma de suporte técnico amigável e eficiente. Aqui, estamos prontos para ajudá-lo a resolver qualquer problema que você possa encontrar. Com uma equipe dedicada e soluções rápidas, nossa missão é tornar sua experiência de suporte tão tranquila quanto possível.</p>
        </div>
        <img src="/clients.webp" alt="" />
      </section>
      <section id='jump'>
        <h3>Seções</h3>
        <hr />
        <div>
          <a href="#news">Novidades</a>
          <a href="#login">Entrar</a>
        </div>
      </section>
      <section id='news'>
        <div id='display'>
          <span>Data: 26/07/2024</span>
          <img src="https://www.redhat.com/rhdc/managed-files/RHELAI_tech_icon.svg" alt="" />
          <h2>Novo Modelo de IA em Treinamento para o LizardHelp!</h2>
          <p>Estamos empolgados em anunciar que estamos no processo de treinamento de um novo modelo de inteligência artificial para o LizardHelp. Este modelo avançado promete melhorar ainda mais a experiência dos nossos usuários, fornecendo respostas mais rápidas e precisas.Nosso objetivo é garantir que o novo modelo seja capaz de lidar com uma ampla variedade de consultas e problemas, desde os mais simples até os mais complexos. Estamos comprometidos em oferecer um suporte técnico inteligente e eficiente em todos os momentos.Fique ligado para mais atualizações sobre o progresso do treinamento e as melhorias futuras que o novo modelo de IA trará para o LizardHelp!</p>
          <span id='leftArrow' style={{ left: "42%" }}>&lt;</span>
          <span id='rightArrow' style={{ right: "42%" }}>&gt;</span>
        </div>
        <div id='lastUpdate'>
          <h3 style={{ marginTop: 0 }}>Ultima atualização: 26/02/2024</h3>
          <p>Modelo de IA adicionado <br />
          chave de atualização: <span className='colored'><a target='_blank' href="https://github.com/MrCoffeeOri/LizardChat/commit/aa30fb4d00080c8ddc72448cf277ad7ca773abe">aa30fb4d00080c8ddc72448cf277ad7ca773abe7</a></span></p>
          <span>Por: SrCoffee</span>
        </div>
      </section>
      <section id='login'>
        <form className='form' onSubmit={handleSubmit}>
          <img src="/logo.webp" alt="" />
          <h2>Entrar</h2>
          <input
            type="email"
            id="email"
            placeholder='Email da empresa'
            onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.email) != null)}
            required
          />
          <p>Email incorreto</p>
          <input
            type="text"
            id={userType == "empresa" ? "password" : "token"}
            placeholder={userType == "empresa" ? "Senha" : "Chave de acesso"}
            onChange={userType == "funcionario" ? (e => handleCorrection(e, e => e.target.value.match(/a/g /*TODO: Token RegexExp*/) != null)) : null}
            required
          />
          {userType == "funcionario" && <p>Chave de acesso incorreta</p>}
          <select id="type" required onChange={e => setUserType(e.target.value)}>
            <option value='placeholder' disabled selected hidden>Selecione uma das opções</option>
            <option value="funcionário">Funcionário</option>
            <option value="empresa">Empresa</option>
          </select>
          <button type="submit">Entrar</button>
        </form>
      </section>
      <CopyRight />
    </div>
  );
}
