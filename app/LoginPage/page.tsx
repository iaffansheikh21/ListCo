import React from 'react';
import LoginForm from '../components/LoginForm';
import Loginnavbar from '../components/LoginNavbar'

const LoginPage: React.FC = () => {
  return(
    <>
        <Loginnavbar/>
        <LoginForm />
    </>
    
  );
};

export default LoginPage;
