import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import './styles.css'

export default function Albumen(){
    return(
        <div className="albumen-container">
            <div className="content">
                <h2>Cadastro de albumen</h2>
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