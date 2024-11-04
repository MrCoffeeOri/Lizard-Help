import React, { FormEvent, useContext } from 'react';
import { userContext } from '../components/UserContext';
import { Outlet } from 'react-router';
import LoginForm from '../components/LoginForm';

export default function Auth() {
  const { user } = useContext(userContext);

  return (
    <>
      {user ? 
        <Outlet /> 
        : 
        <div id='auth'>
          <h1>Autenticação requerida</h1>
          <LoginForm />
        </div>
      }
    </>
  );
}
