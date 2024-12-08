import React, { useContext, useEffect } from 'react';
import { userContext } from '../components/UserContext';
import LoginForm from '../components/LoginForm';
import { path } from '../helpers/api';

export default function Auth({ children }) {
  const { user, setUser, setAlert } = useContext(userContext)
  
  useEffect(() => {
    const userAuth = async () => {
        try {
            const userResponse = await fetch(path + "/user/auth", { 
              method: "POST", 
              headers: { 'Content-Type': 'application/json' }, 
              credentials: 'include' 
            }).then(res => res.json())
            setAlert({ message: userResponse.error ? "Autenticação requerida" : userResponse.msg, ok: userResponse.msg })
            userResponse.user && setUser(userResponse.user)
            console.log(userResponse.user)
        } catch (error) {
            setAlert({ message: error.toString(), ok: false })
        }
    }
    userAuth()
}, [])


  return (
    <>
      {user ? 
        children 
        : 
        <div id='auth'>
          <h1>Autenticação requerida</h1>
          <LoginForm />
        </div>
      }
    </>
  );
}