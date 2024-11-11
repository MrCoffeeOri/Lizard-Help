import React, { useContext } from 'react';
import { userContext } from '../components/UserContext';
import LoginForm from '../components/LoginForm';

export default function Auth({ children }) {
  const { user } = useContext(userContext);

  return (
    <>
      {user || true ? 
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