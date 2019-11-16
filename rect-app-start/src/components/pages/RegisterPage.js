import React from 'react';
import Regiser from '../forms/Register';
import { Link } from "react-router-dom";


const RegisterPage = () => (
<div className="formContainer">
    <h1>Sign-up</h1>
    <Regiser /><br/>
    <Link to="/login">Already member? Login</Link>
</div>
);

export default RegisterPage;