import React from 'react'
import { handleCorrection, RegexCorrections } from '../formCorrection';

export default function Client() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  
  return (
    <div id='client'>
      <h2>Login</h2>
      <form  className='form' onSubmit={handleSubmit}>
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
