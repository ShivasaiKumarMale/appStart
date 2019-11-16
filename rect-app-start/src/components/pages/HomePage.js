import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => (
<div>
    <h1>Home Page</h1>
    <Link to="/login">Login</Link><br/>
    <Link to="/register">New here? lets register</Link>

</div>
);

export default Homepage;