import React from 'react'
import { handleCorrection } from '../helpers/formCorrection'

export default function Technician() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div id='technician'>
        {/*
        <form className='form' onSubmit={handleSubmit}>
          <img src="/logo.webp" alt="" />
          <input
            type="text"
            id="token"
            placeholder="Chave de acesso"
            onChange={e => handleCorrection(e, e => e.target.value.match(/TODO: Token RegexExp) != null)}
            required
          />
          <p>Chave de acesso incorreta</p>
          <button type="submit">Entrar</button>
            </form>*/}
        <div id='tickets'>
            <div className="ticket">
                <span>Criado em 21/03/2024</span>
                <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                <p className="by">Por João Silva</p>
                <div className="tags">
                    <span className="tag">#Urgente</span>
                    <span className="tag">#Calculadora</span>
                    <span className="tag">#Explosão</span>
                </div>
                <div className="details">
                    <p className='description'>Cê é loko fi, FAZ O L</p>
                    <div className="messages">
                        <div className="message">
                            <p><strong>Maria:</strong> Isso parece perigoso, você está bem?</p>
                            <p className="date">Enviado em: 2024-08-10</p>
                            <span className="view-status viewed">Visualizado</span> 
                        </div>
                        <div className="message">
                            <p><strong>Carlos:</strong> Talvez você deva trocar de calculadora.</p>
                            <p className="date">Enviado em: 2024-08-11</p>
                            <span className="view-status not-viewed">Não Visualizado</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
