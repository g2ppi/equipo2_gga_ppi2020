import React from 'react';
import '../style/Confialarma.css';
import {Link} from 'react-router-dom';

export const Confialarma = (props) => {
const {tit2,Descrip2} = props

  return(
<div className="Confialarma">
    <center> <h1>La alarma se ha programado con exito</h1> </center>
    <center>  <img className="logo_1" src="../img/logo_1.jpg"/> </center>


    <center>  <Link to="/Recordatorio" > <button className="btn btn-primary" >Recordatorio</button> </Link> </center>

</div>





)
);