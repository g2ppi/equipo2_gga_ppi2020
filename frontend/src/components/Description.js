import React from 'react';
import '../style/Description.css';

export const Description = (props) => {
const {tittle,Descripcion} = props


  return(

<div className="Description">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 className="display-4">{tittle}</h1>
  <p className="lead">
  {Descripcion}
  </p>
</div>
</div>
  
)
};