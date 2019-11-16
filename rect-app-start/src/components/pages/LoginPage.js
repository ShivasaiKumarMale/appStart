import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from "react-router-dom";


const LoginPage = () => (
<div className="formContainer">
    <h1>Login</h1>
    <LoginForm /><br/>
    <Link to="/">New here? Signup</Link>
</div>
);

export default LoginPage;