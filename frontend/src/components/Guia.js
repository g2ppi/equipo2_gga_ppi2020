import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import '../style/Footer.css'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom';
export const Guia =()=>{
  return(
    <div>
    <div className="Carousel">
      <div className="Menu">
<>
  
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Description"><img className="Logo" src="../img/logo_SDC.jpg" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Description">Inicio</Nav.Link>
      <Nav.Link href="/Rutinas">Rutinas</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Dejanos una reseña" className="mr-sm-2" />
      <Button variant="outline-light">Enviar calificacion</Button>
    </Form>
  </Navbar>
</>
</div>
<Carousel>
  <Carousel.Item>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/r2OfMuQvqbU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Carousel.Caption>
      <h3>Ejercicio piernas y gluteos</h3>
      <p>Sentadillas</p>
      <p>Zancadas</p>
      <p>Elevacion de rodillas</p>
      <p>Sentadilla estatica</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/RPfxeHWm8Oo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Carousel.Caption>
      <h3>Ejercicio de abdomen</h3>
      <p>Flexiones de pecho.</p>
      <p>Extensión de tríceps.</p>
      <p>Estira los brazos y empuja tu cuerpo hacia arriba hasta llegar a la posición inicial.</p>
      <p>Flexiona tus brazos y baja el cuerpo hasta formar un ángulo de 90 grados entre tus antebrazos y tus tríceps.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/LB7qrPXoMZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Carousel.Caption>
      <h3>Video Motivacional</h3>
      <p>Sentadillas</p>
      <p>Zancadas</p>
      <p>Elevacion de rodillas</p>
      <p>Sentadilla estatica</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/mVbgoeMTVS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Carousel.Caption>
      <h3>Ejercicio de brazos</h3>
      <p>flexiones</p>
      <p>flexiones en diamante</p>
      <p>curl de biceps</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<center>
<div><Link to="/" ><button type="button" class="btn btn-dark">Volver</button></Link></div>

</center>

</div>
<div className="Footer">
<footer className="container">
  <div className="row">
    <div className="col-6 col-md">
      <h4>Integrantes</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/"> - Samuel Colorado</a></li>
        <li><a className="text-light" href="/"> - Kevin Santiago Monsalve</a></li>
        <li><a className="text-light" href="/"> - Juan David Londoño</a></li>
        <li><a className="text-light" href="/"> - Samuel Stiven Londoño </a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Redes sociales</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/"> - samuelcolorado2004@gmail.com</a></li>
        <li><a className="text-light" href="/"> - Kevinsanmonsalve@gmail.com</a></li>
        <li><a className="text-light" href="/"> - londojuan874@gmail.com</a></li>
        <li><a className="text-light" href="/"> - samuelestiven2003@gmail.com </a></li>
      </ul>
    </div>
  </div>
</footer>
</div>
</div>
  )
}