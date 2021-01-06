import React, { useState } from "react";
import Heading from "../Header/Heading";
import axios from "axios";
import '../Login/login.css'


function initialState(){
  return { user: '', password: ''}
}

const Login = () => {
  const [values, setValues]= useState(initialState)

  function onChange(event){
    const {value, name} = event.target

    setValues({...values,[name]:value,})

  }

  function Submit(event){
    event.preventDefault()
    axios.post("https://myapiteste.free.beeceptor.com",values).then((response)=>console.log(response))

  }

  return (
    <>
      
        <Heading/>
        <div className="user-login">
          <h1 className="user-login-title">Acessar o Sistema</h1>
          <form onSubmit={Submit} >
            <div className="user-login-form-control">
              <label>Usuário</label>
              <input   id="user" type="text" name="user" onChange={onChange}  />
            


            </div>
            <div className="user-login-form-control">
              <label htmlFor="password">Senha</label>
              <input  id="password" type="password" name="password" onChange={onChange}  />

            </div>
            <button>Enviar</button>

          </form>
        


      </div>

      </>
    
  );
};

export default Login;
