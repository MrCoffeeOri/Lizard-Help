import React, { useContext } from 'react';
import { userContext } from './UserContext';
import { Outlet } from 'react-router';

export default function Auth() {
  const { user } = useContext(userContext);

  return (
    <>
      {user ? 
        <Outlet /> 
        : 
        <h1 style={{ textAlign: 'center', marginTop: '45vh' }}>Autenticação requerida</h1>
      }
    </>
  );
}
