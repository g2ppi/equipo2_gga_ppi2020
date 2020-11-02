import React from "react";
import "../style/Recordatorio.css";
import { Link } from "react-router-dom";

export const Recordatorio = (props) => {
  const { tit2, Descrip2 } = props;

  return (
    <div className="Recordatorio">
      <center>
        {" "}
        <h1>Su alarma sonara a las 3:00 PM</h1>{" "}
      </center>
      <center>
        {" "}
        <img className="relog" src="../img/relog.jpg" />{" "}
      </center>

      <center>
        {" "}
        <Link to="/Guia">
          {" "}
          <button className="btn btn-primary">Regresar</button>{" "}
        </Link>{" "}
      </center>
    </div>
  );
};
