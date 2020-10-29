import React from 'react';
import '../style/Inicio.css';
import {Link} from 'react-router-dom';

export const Inicio = (props) => {
  const {titulo2,Descripcion3} = props

  return(
   
    <div className="Inicio">
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ">
    
    <div><img className="Logo" src="../img/inicio_usuario.png" alt="Logo" /></div>
      <h1 className="display-4">{titulo2}</h1>
      <p className="lead">
      {Descripcion3}
      </p>

    </div>
    
    <div>
    <form className= "text-center">
    <div>
      <row>
    <div>
        <group className="formGridName">
        <div><label className= "inputName" for= "inputName">Inicio de sesion:</label></div>
          <input type="Name" placeholder="Nombre" />
        </group>
    </div>
    
    <div>
        <group classNmae="formGridPassword">
          <label className= "inputPassword" for= "inputPassword"></label>
          <input type="password" placeholder="Contraseña" />
        </group>
    </div>
      </row>
    </div>

    <Link to="/Guia" > <button className="btn btn-primary" > Iniciar </button> </Link>
    
    <div>

    </div>
    
    </form>
    </div>
      </div>
      
    )
    };