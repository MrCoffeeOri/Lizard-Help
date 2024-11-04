import React, { FormEvent, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../css/modules/loginForm.module.css'
import { handleCorrection, RegexCorrections } from '../helpers/formCorrection';
import { userContext } from './UserContext';

export default function LoginForm() {
    const { setUser, setErrorMessage } = useContext(userContext)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const authResponse = await (await fetch("http://localhost:5000/user/auth", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: e.currentTarget[0].value, password: e.currentTarget[1].value })
          })).json()
          if (authResponse.error)
          return setErrorMessage(authResponse.error)
          setUser(authResponse.user)
          navigate("/home")
        } catch (error) {
            setErrorMessage(error.toString())
        }
      }

  return (
    <form className={styles.loginForm + " form"} onSubmit={handleSubmit}>
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
        <Link to='/start'>Não possui uma conta?</Link>
    </form>
  )
}