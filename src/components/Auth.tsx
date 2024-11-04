import React, { FormEvent, useContext } from 'react';
import { userContext } from './UserContext';
import { Outlet } from 'react-router';
import { handleCorrection, RegexCorrections } from '../helpers/formCorrection';
import { Link } from 'react-router-dom';

export default function Auth() {
  const { user } = useContext(userContext);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      {user ? 
        <Outlet /> 
        : 
        <div id='auth'>
          <h1>Autenticação requerida</h1>
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
              id="password"
              placeholder="Senha"
              required
            />
            <button type="submit">Entrar</button>
            <Link to='/start'>Criar uma conta</Link>
          </form>
        </div>
      }
    </>
  );
}
