import React from 'react';
import Auth from '../hoc/auth';


const SecretList = (props) => {

    

    return (
        <div>
            <h1 className="center">Secret Operatives</h1>
            <ol>
                <li>Andy</li>
                <li>Brandon</li>
                <li>Edmund</li>
                <li>Tiffany</li>
                <li>Vienna</li>                   
            </ol>
        </div>
    )
}

export default Auth(SecretList);