import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegexCorrections, handleCorrection } from '../formCorrection';

export default function Start() {
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (document.querySelector("form > input[error]")) return
    scrollTo({ top: 0, left: 0, behavior: 'instant' })
    navigate("/home")
  };

  return (
    <div id='start'>
      <img src="./logoName.webp" alt="" />
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <img src="./logo.webp" alt="" />
          <input
            required
            type="text"
            placeholder="Nome do Dono"
          />
          <input
            required
            type="email"
            placeholder="Email Profissional"
            onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.email) != null)}
          />
          <p>Email incorreto</p>
          <input
            required
            type="password"
            placeholder="Senha"
            ref={passwordRef}
          />
          <input
            required
            type="password"
            placeholder="Repetir Senha"
            onChange={e => handleCorrection(e, e => e.target.value == passwordRef.current.value)}
          />
          <p>Senha não corresponde</p>
          <input 
            required
            type="tel" 
            placeholder="Número de telefone" 
            onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.telNumber) != null)}
          />
          <p>Telefone incorreto</p>
          <input
            required
            type="text"
            placeholder="Empresa"
          />
          <input
            required
            type="text"
            placeholder="CNPJ"
            onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.companyID) != null)}
          />
          <p>CNPJ incorreto</p>
          <button type="submit">Criar</button>
        </form>
        <h1>Centralize seus canais de atendimento com <span className="marked">gerenciamento</span> e <span className="marked">automação</span> completos de tickets</h1>
      </div>
    </div>
  );
}