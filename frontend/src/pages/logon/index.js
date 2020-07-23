import React,{useState,useEffect} from 'react';
import logoImg from '../../assets/chicken.svg'
import background from '../../assets/egground.svg'
import {Link,useHistory,useLocation} from 'react-router-dom';
import api from '../../services/api'

import './styles.css'

export default function Logon (){
    const [id,SetId]=useState('');
    const history=useHistory();
    const location=useLocation();

    useEffect(()=>{
        if(location.state!==undefined){
            SetId(location.state.id);
        }   
    },[location])

    async function handleLogin(event){
        event.preventDefault();

        try{
            const response=await api.post('login',{id});
            localStorage.setItem('granjaID',id);
            localStorage.setItem('granjaName',response.data.nomefantasia);

            history.push('/dashboard');
        }
        catch(error){
            alert('O Id informado não corresponde a nenhuma granja cadastrada')
        }
    }

    return(
        <div className="login-container">
            <img src={background} alt="ovo background" className="eggground"/>
            <section className="form" >
                <img src={logoImg} alt="Imagem Logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Bem vindo de volta</h1>
                    <h3>Faça seu Login para continuar</h3>

                    <label>
                        <input type="text"
                        value={id}
                        onChange={e=>SetId(e.target.value)}
                        />
                    </label>
                    <button type="submit">Login</button>
                    <p>ou</p>
                    <Link to="/register">
                        Cadastre-se
                    </Link>
                </form>
            </section>
        </div>
    )
}