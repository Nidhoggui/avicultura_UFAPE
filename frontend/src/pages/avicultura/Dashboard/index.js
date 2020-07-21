import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import './styles.css'

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="content">
                <h2>Cadastro de ovo</h2>
                <div className="container">
                    
                </div>
                <button type="submit" form="sector_form">
                    Cadastrar
                    <FiChevronRight size={20}/>
                </button>
            </div>
        </div>
    )
}