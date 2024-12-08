import React, { FormEvent, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom' 
import styles from '../css/modules/loginForm.module.css'
import { handleCorrection, RegexCorrections } from '../helpers/formCorrection'
import { userContext } from './UserContext'

export default function LoginForm() {
    const { setUser, setAlert } = useContext(userContext)
    const history = useHistory()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
          const authResponse = await fetch("http://localhost:5000/user/auth", {
            method: "POST",
            headers: { 
              'Content-Type': 'application/json' 
            },
            credentials: 'include',
            body: JSON.stringify({
              email: (e.target[0] as HTMLInputElement).value,
              password: (e.target[1] as HTMLInputElement).value,
            }),
          }).then(res => res.json())
          setAlert({ message: authResponse.error || authResponse.msg, ok: authResponse.msg })
          if (authResponse.error) return
          setUser(authResponse.user)
          history.push(authResponse.user.type == "technician" ? "/user/technician" : "/user/home")
        } catch (error) {
          setAlert({ message: error.toString() })
        }
      }

  return (
    <form className={`${styles.loginForm} form`} onSubmit={handleSubmit}>
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
            type="password" // Changed to "password" for security
            id="password"
            placeholder="Senha"
            required
        />
        <button type="submit">Entrar</button>
        <Link to='/start'>Não possui uma conta?</Link>
    </form>
  )
}