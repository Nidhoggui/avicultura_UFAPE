import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../../assets/chicken.svg'
import Dashboard from '../../../assets/dashboard.svg'
import sector from '../../../assets/sector.svg'
import Egg from '../../../assets/egg.svg'
import User from '../../../assets/user.svg'

import './styles.css'
export default function Bar(){
    return(
        <div className="bar-container">
            <header>
                <img src={logoImg} alt="Imagem Logo" />
                <h3>Avicultura</h3>
            </header>
            
            <section>
                <Link to="/register" className="Dashboard">
                    <img src={Dashboard} alt="Imagem Logo"/>
                    <h4>Dashboard</h4>
                </Link>
                <Link to="/register" className="Setor">
                    <img src={sector} alt="Imagem Logo"/>
                    <div className="text">
                        <h4>Cadastrar</h4>
                        <p>Setor</p>
                    </div>
                </Link>
                <Link to="/register" className="Ovos">
                    <img src={Egg} alt="Imagem Logo"/>
                    <div className="text">
                        <h4>Cadastrar</h4>
                        <p>Ovos</p>
                    </div>
                </Link>
                <Link to="/register" className="Granja">
                    <img src={User} alt="Imagem Logo"/>
                    <div className="text">
                        <h4>Minha</h4>
                        <p>Granja</p>
                    </div>
                </Link>
            </section>
        </div>
    )
}