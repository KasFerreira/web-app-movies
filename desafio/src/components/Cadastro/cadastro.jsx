import React, { useState } from "react";
import Heading from "../Header/Heading";
import axios from "axios";
import './cadastro.css'
import { Link } from 'react-router-dom'
import { Button }from 'react-bootstrap'
import { setLocalStorage } from '../../helpers/localstorage'
import { useHistory } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





function initialState(){
  return { user: '', password: ''}
}

const Cadastro = () => {
  const [values, setValues]= useState(initialState)
  const [isErros, setIsErros] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const history = useHistory()
  function onChange(event){
    const {value, name} = event.target

    setValues({...values,[name]:value,})

  }

  function Submit(event){
    event.preventDefault()
    axios.post("http://127.0.0.1:3333/cadastro",values).then((response)=> {
      
      axios.post("http://127.0.0.1:3333/login",values).then((response)=> {
      
        setLocalStorage("TokenJWT", response.data.token) 
        history.push('/movies')
        console.log(response.data.token)
    
        } ).catch((e)=>{setIsErros(true)})

    } ).catch((e)=>{setIsErros(true)})


  }

  return (
    <>
      
        <Heading/>
        <div className="user-Cadastro">
          <h1 className="user-Cadastro-title">Cadastrar</h1>

          <form onSubmit={Submit} className="user-">
          <div className="user-Cadastro-form-contol">
              <label htmlFor="nome">Nome </label><br/>
              <input  id="nome" type="text" placeholder="nome"name="nome" onChange={onChange}  />

            </div>

            <div className="user-Cadastro-form-control">
              <label>E-mail</label><br/>
              <input   id="user" type="email" placeholder="email" name="email" onChange={onChange}  />
            


            </div>
            <div className="user-Cadastro-form-contol">
              <label htmlFor="password">Senha </label><br/>
              <input  id="password" type="password" placeholder="senha"name="password" onChange={onChange}  />

            </div>
            <div>
              <p>Data:</p>
            <DatePicker className="date" selected={startDate} onChange={date => setStartDate(date)} /> 
            </div>
            


            
            <div id="btn-form-cadastro">
              
              <Button type="submit"> Enviar</Button>
            <Link to="/">Login</Link>
            {isErros&&<div>Cadastro ou senha incorretos!</div>}
            </div>
            

          </form>
        


      </div>

      </>
    
  );
};

export default Cadastro;
