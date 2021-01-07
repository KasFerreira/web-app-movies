import React, { useState } from "react";
import Heading from "../Header/Heading";
import axios from "axios";
import '../Login/login.css'
import { Link } from 'react-router-dom'
import { Button }from 'react-bootstrap'
import { setLocalStorage } from '../../helpers/localstorage'
import { useHistory } from "react-router-dom"




function initialState(){
  return { user: '', password: ''}
}

const Login = () => {
  const [values, setValues]= useState(initialState)
  const [isErros, setIsErros] = useState(false)
  const history = useHistory()
  function onChange(event){
    const {value, name} = event.target

    setValues({...values,[name]:value,})

  }

  function Submit(event){
    event.preventDefault()
    axios.post("http://127.0.0.1:3333/login",values).then((response)=> {
      
    setLocalStorage("TokenJWT", response.data.token) 
    history.push('/movies')
    console.log(response.data.token)

    } ).catch((e)=>{setIsErros(true)})


  }

  return (
    <>
      
        <Heading/>
        <div className="user-login">
          <h1 className="user-login-title">Acessar</h1>

          <form onSubmit={Submit} className="user-">
            <div className="user-login-form-control">
              <label>Login</label>
              <input   id="user" type="email" placeholder="email" name="email" onChange={onChange}  />
            


            </div>
            <div className="user-login-form-contol">
              <label htmlFor="password">Senha </label>
              <input  id="password" type="password" placeholder="senha"name="password" onChange={onChange}  />

            </div>
            <div id="btn-form">
              
              <Button type="submit"> Enviar</Button>
            <Link to="/cadastro">Cadastrar</Link>
            {isErros&&<div>Login ou senha incorretos!</div>}
            </div>
            

          </form>
        


      </div>

      </>
    
  );
};

export default Login;
