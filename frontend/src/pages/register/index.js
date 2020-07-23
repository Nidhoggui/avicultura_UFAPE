import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {FiCornerUpLeft} from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/chicken.svg'
import './styles.css';

export default function Register(){
    const [nomeFantasia,setNomeFantasia] =useState('');
    const [razaoSocial,setRazaoSocial] =useState('');
    const [proprietario,setProprietario] =useState('');
    const [cnpj,setCnpj] =useState('');
    const [localizacao,setLocalizacao] =useState('');
    const [gaiola,setGaiola] =useState(false);
    const [termosDeUso,setTermosDeUso] =useState(false);
    const history= useHistory();


    async function handleRegister(event){
        event.preventDefault();
        const data={
            nomeFantasia,
            razaoSocial,
            cnpj,
            proprietario,
            gaiola,
            localizacao,
            termosDeUso,
        }
        try{
            const response= await api.post('cadastro',data);
            alert(`Seu ID é ${response.data.id}, use-o para fazer login`);
            history.push({
                pathname:'/',
                state:{id:response.data.id}
            });
        }
        catch(error){
            if(error.message.includes('428')){
                alert('É necessário aceitar os termos de uso para se cadastrar no sistema')
            }
            else{
                alert('Ocorreu um problema ao se cadastrar. Por favor,tente novamente')
            }
        }
    }

    return(
        <div className="register">
            <Link to="/">
                    <FiCornerUpLeft/>
                    <p>Voltar para o login</p>
                </Link>
        <div className="register-container">
            <div className="content">
                <section>
                    <div className="header">
                        <img src={logoImg} alt="Imagem Logo"/>
                        <h1>Olá Visitante!</h1>
                        <p>Cadastre-se para entrar no sistema</p>
                    </div>
                    <div className="toggle">
                        <h3>Criação <br/>de Gaiola</h3>
                        <label className="switch">
                        <input type="checkbox"
                        value={gaiola}
                        onChange={e=> setGaiola(e.target.checked)}
                        form="register_form"
                        />
                        <span className="slider round"></span>
                        </label>
                        <h3>Criação <br/>de Piso</h3>
                    </div>
                </section>
            <section>
                <form onSubmit={handleRegister} id="register_form">
                    <div className="name">
                        <input type="text" 
                        placeholder="Nome Fantasia"
                        value={nomeFantasia}
                        onChange={e=> setNomeFantasia(e.target.value)}
                        />
                    </div>
                    <div className="social_reason">
                        <input type="text" 
                        placeholder="Razão Social"
                        value={razaoSocial}
                        onChange={e=> setRazaoSocial(e.target.value)}
                        />
                    </div>
                    <div className="owner">
                        <input type="text" 
                        placeholder="Proprietário"
                        value={proprietario}
                        onChange={e=> setProprietario(e.target.value)}
                        />
                    </div>
                    <div className="cnpj">
                        <input type="text" 
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange={e=> setCnpj(e.target.value)}
                        />
                    </div>
                    <div className="localization">
                        <input type="text" 
                        placeholder="Localização"
                        value={localizacao}
                        onChange={e=> setLocalizacao(e.target.value)}
                        />
                    </div>
                    <div className="authorization">
                        <input type="checkbox" 
                        name="auth_button"
                        value={termosDeUso}
                        onChange={e=> setTermosDeUso(e.target.checked)}
                        />
                        <p>Concordo com os <b>termos de uso de dados</b></p>
                    </div>
                </form>
            </section>
            </div>
        </div>        
        <div className="button_row">
            <button type="submit" form="register_form">Registrar</button> 
        </div>
        </div>
    )
}