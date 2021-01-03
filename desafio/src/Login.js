import React from "react";
import Heading from "./components/Header/Heading";
import { Link } from 'react-router-dom'


const Login = () => {
  return (
      <div>
        <Heading/>
        <Link to="/perfis">Movies</Link>


      </div>
    
  );
};

export default Login;
