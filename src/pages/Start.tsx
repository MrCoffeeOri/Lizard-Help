import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegexCorrections, handleCorrection } from '../helpers/formCorrection';
import GoBack from '../components/GoBack';

export default function Start() {
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (document.querySelector("form > input[error]")) return
    scrollTo({ top: 0, left: 0 })
    /*await fetch("http://localhost:5000/client/create", {
      method: "POST",
      body: JSON.stringify({ 
        owner: { 
          name: (e.currentTarget[0] as HTMLInputElement).value, 
          email: (e.currentTarget[1] as HTMLInputElement).value 
        }, 
        password: (e.currentTarget[2] as HTMLInputElement).value, 
        tel: (e.currentTarget[4] as HTMLInputElement).value, 
        company: (e.currentTarget[5] as HTMLInputElement).value, 
        cuid: (e.currentTarget[6] as HTMLInputElement).value 
      })
    })*/
    navigate("/home")
  };

  return (
    <div id='start'>
      <GoBack to='/' />
      <img id='logo' src="./logoName.webp" alt="" />
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
          <p>Use o formato username@domain.com</p>
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
          <p>Use o formato (XX) XXXXX-XXXX</p>
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
          <p>Use o formato XX.XXX.XXX/0001-XX</p>
          <button type="submit">Criar</button>
        </form>
        <h1>Centralize seus canais de atendimento com <span className="marked">gerenciamento</span> e <span className="marked">automação</span> completos de tickets</h1>
      </div>
    </div>
  );
}