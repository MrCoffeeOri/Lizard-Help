import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RegexCorrections, handleCorrection } from '../helpers/formCorrection';
import GoBack from '../components/GoBack';
import CopyRight from '../components/CopyRight';
import Alert from '../components/Alert';
import { userContext } from '../components/UserContext';

export default function Start() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setUser } = useContext(userContext)
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (document.querySelector("form > input[error]")) return;
    scrollTo({ top: 0, left: 0 });

    try {
      const userResponse = await (await fetch("http://localhost:5000/user/create", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (e.target[0] as HTMLInputElement).value,
          email: (e.target[1] as HTMLInputElement).value,
          password: (e.target[2] as HTMLInputElement).value,
          type: 'owner'
        })
      })).json();
      if (userResponse.error)
        return setErrorMessage(userResponse.error)
      const companyResponse = await (await fetch("http://localhost:5000/company/create", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (e.target[4] as HTMLInputElement).value,
          email: (e.target[5] as HTMLInputElement).value,
          phone: (e.target[6] as HTMLInputElement).value,
          cid: (e.target[7] as HTMLInputElement).value,
          owner: userResponse.user._id
        })
      })).json()
      if (companyResponse.error)
        return setErrorMessage(companyResponse.error)
      userResponse.user.company = companyResponse.company
      setUser(userResponse.user)
      navigate("/home")
    } catch (error) {
      setErrorMessage(error); 
    }
  };

  return (
    <div id='start'>
      <Alert message={errorMessage} />
      <GoBack to='/' />
      <img id='logo' src="./logoName.webp" alt="" />
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <img src="./logo.webp" alt="" />
          <h2>Dados do Usuário</h2>
          <input required type="text" placeholder="Nome Completo" />
          <input required type="email" placeholder="Email Pessoal" onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.email) != null)} />
          <p>Use o formato username@domain.com</p>
          <input required type="password" placeholder="Senha" ref={passwordRef} />
          <input required type="password" placeholder="Repetir Senha" onChange={e => handleCorrection(e, e => e.target.value == passwordRef.current.value)} />
          <p>Senha não corresponde</p>
          <h2 style={{ marginTop: 30 }}>Dados da Empresa</h2>
          <input required type="text" placeholder="Nome da Empresa" />
          <input required type="email" placeholder="Email da Empresa" onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.email) != null)} />
          <p>Use o formato username@domain.com</p>
          <input required type="tel" placeholder="Número de telefone" onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.telNumber) != null)} />
          <p>Use o formato (XX) XXXXX-XXXX</p>
          <input required type="text" placeholder="CNPJ" onChange={e => handleCorrection(e, e => e.target.value.match(RegexCorrections.companyID) != null)} />
          <p>Use o formato XX.XXX.XXX/0001-XX</p>
          <button style={{ marginBottom: 15 }} type="submit">Criar</button>
          <div>
            <Link rel="stylesheet" to="/client#login">Já possui uma conta?</Link>
          </div>
        </form>
        <div>
          <img src="start.png" alt="" />
          <h1>Centralize seus canais de atendimento com <span className="marked">gerenciamento</span> e <span className="marked">automação</span> completos de tickets</h1>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}