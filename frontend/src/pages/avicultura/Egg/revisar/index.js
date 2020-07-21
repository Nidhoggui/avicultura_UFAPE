import React from 'react'
import {FiChevronRight} from 'react-icons/fi';

import './styles.css'
export default function Revisar(){
    return(
        <div className="revisar-container">
            <div className="content">
                <h2>Cadastro de Ovo</h2>
                <h3>Revisar</h3>
                <div className="container">
                
                </div>
                <button>
                    Encerrar
                    <FiChevronRight size={20}/>
                </button>
                <button>
                    Novo Ovo   
                    <FiChevronRight size={20}/>
                </button>
            </div>
        </div>
    )
}