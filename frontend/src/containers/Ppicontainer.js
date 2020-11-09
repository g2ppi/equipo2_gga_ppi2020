import React from "react";
import "../styles.css";

import { Otroinicio } from "../components/Otroinicio";
import { Description } from "../components/Description";
import { Registro } from "../components/Registro";
import { Inicio } from "../components/Inicio";
import { Rutinas } from "../components/Rutinas";
import { Alarma } from "../components/Alarma";
import { Guia } from "../components/Guia";
import { Confialarma } from "../components/Confialarma";
import { Recordatorio } from "../components/Recordatorio";
import { Menu } from "../components/Menu";
import { Editar } from "../components/Editar";



import { BrowserRouter, Route } from "react-router-dom";

export default function Ppicontainer() {
  return (
    
  <BrowserRouter className="Ppicontainer">
  <Route path="/Rutinas" exact component={Rutinas} />
  <Route path="/Description" exact component={Description} />
  <Route path="/Inicio" exact component={Inicio} />
  <Route path="/Notificacion" exact component={Notification} />
  <Route path="/Otroinicio" exact component={Otroinicio} />
  <Route path="/Registro" component={Registro} />
  <Route path="/Alarma" exact component={Alarma} />
  <Route path="/Guia" exact component={Guia} />
  <Route path="/Confialarma" exact component={Confialarma} />
  <Route path="/Recordatorio" exact component={Recordatorio} />
  <Route path="/Menu" exact component={Menu} />
  <Route path="/Editar" exact component={Editar} />

 

</BrowserRouter>
);
}