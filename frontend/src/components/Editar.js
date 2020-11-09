import React from "react";
import "../style/Menu.css";
import { Link } from "react-router-dom";

export function Editar() {
  return (
    <table striped bordered hover variant="light" style={{ width: "" }}>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Dificultad</th>
          <th>Ejercicio</th>
          <th>Alarma</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lunes</td>
          <td>Facil</td>
          <td>
            1. 10 minutos de caminata para calentar,
            <option>
              {" "}
              2. 45 minutos de resistencia (Correr deteniéndose lo menos
              posible.
            </option>
            <option> 3. Hidratación </option>
            4. 5 minutos de estiramiento para que el cuerpo regrese a su estado
            normal
          </td>
          <td>
            {" "}
            <Link to="/Confialarma">
              {" "}
              <button className="btn btn-primary">Editar</button>{" "}
            </Link>{" "}
          </td>
        </tr>

        <tr>
          <td>Martes</td>
          <td>Medio</td>
          <td>
            1. 15 minutos de estiramiento
            <option>
              2. 10 minutos de fuerza (pesas, Lagartijas, abdominales)
            </option>
            <option> 3. Hidratación </option>
            4. 5 minutos de estiramiento para que el cuerpo vuelva a su estado
            normal
          </td>
          <td>
            {" "}
            <Link to="/Confialarma">
              {" "}
              <button className="btn btn-primary">Editar</button>{" "}
            </Link>{" "}
          </td>
        </tr>

        <tr>
          <td>Miercoles</td>
          <td>Facil</td>
          <td>
            1. 15 minutos de caminata para calentar,
            <option>
              {" "}
              2. 5 minutos de velocidad (Correr lo más rápido posible)
            </option>
            <option> 3. Hidratación </option>
            4. 5 minutos de estiramiento para que el cuerpo regrese a su estado
            normal
          </td>
          <td>
            {" "}
            <Link to="/Confialarma">
              {" "}
              <button className="btn btn-primary">Editar</button>{" "}
            </Link>{" "}
          </td>
        </tr>

        <tr>
          <td>Jueves</td>
          <td>Dificil</td>
          <td>
            1. 10 minutos de caminata para calentar
            <option>
              {" "}
              2. 10 minutos de resistencia (correr deteniéndose lo menos
              posible)
            </option>
            <option> 3. Hidratación </option>
            <option> 4. 5 minutos de caminata </option>
            <option> 5. 10 minutos de estiramiento </option>
            <option> 6. Hidratación </option>
            <option> 7. 10 minutos de fuerza </option>
            8. 5 minutos de estiramiento{" "}
          </td>
          <td>
            {" "}
            <Link to="/Confialarma">
              {" "}
              <button className="btn btn-primary">Editar</button>{" "}
            </Link>{" "}
          </td>
        </tr>

        <tr>
          <td>Viernes</td>
          <td>Dificil</td>
          <td>
            1. 10 minutos de caminata para calentar
            <option> 2. 15 minutos de fuerza</option>
            <option> 3. Hidratación </option>
            <option> 4. 10 minutos de caminata </option>
            <option> 5. 15 minutos de resistencia</option>
            <option> 6. Hidratación </option>
            <option> 7. 10 minutos de caminata </option>
            8. 5 minutos de estiramiento{" "}
          </td>
          <td>
            {" "}
            <Link to="/Confialarma">
              {" "}
              <button className="btn btn-primary">Editar</button>{" "}
            </Link>{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
