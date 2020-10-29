import React from 'react';
import '../style/Otroinicio.css';

export const Otroinicio = (props) => {
const {tit2,Descrip2} = props

  return(

<div className="Description">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

<div><img className="Logo" src="https://www.tumarcafacil.com/wp-content/uploads/2017/06/RegistroDeMarca-01-1.png" alt="Logo" /></div>
  <h1>Alarma</h1>
  <p className="lead">
  {Descrip2}
  </p>
</div>
  </div>
  
)
};  