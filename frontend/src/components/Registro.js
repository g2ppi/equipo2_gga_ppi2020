import React from 'react';
import '../style/Registro.css';
import {Link} from 'react-router-dom';


export const Registro = (props) => {
  const {titulo,Descripcion,Descripcion2} = props


  return(

<center>

<div className="Registro">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ">
<img className="Logo_1" src="../img/registro.jpg" alt="Logo" />
 <h2 className="display-4">{titulo}</h2>
  <p className="lead">
  {Descripcion}
  </p>
<p className="lead">
{Descripcion2}
</p>
</div>

<div>
<form action="/Menu" className= "text-center">
<div>
  <row>
<div>
    <group className="formGridName">
    <div><label for= "inputName">Nombre de usuario</label></div>
      <input type="Name" placeholder="" />
    </group>
</div>

<div>
    <group classNmae="formGridPassword">
    <div><label for= "inputPassword">Contraseña</label></div>
      <input type="password" placeholder="Contraseña" />
    </group>
</div>

<div>
    <group classNmae="formGridPassword1">
      <label for= "inputPassword1"></label>
      <input type="password1" placeholder="Confirmar contraseña" />
    </group>
</div>
  </row>
</div>

<div>
    <Link to="/Guia" > <button className="btn btn-primary" > Iniciar y ver videos </button> </Link>

    </div>

</form>
</div>
  </div>
  </center>
)
};