const express= require('express');
const app = express();

// definir todos los componentes, modulos app
const ejercicio= require('./routes/ejercicio');// crud

const ejercicio_usuario = require('./routes/ejercicio_usuario');// crud

const rutina = require('./routes/rutina');// crud

const rutina_usuario = require('./routes/rutina_usuario');// crud

const usuario = require('./routes/usuario');// crud

const tipousuario = require('./routes/tipousuario');// crud

//modificar const


//ajustes


app.set('port',3000)



// Middleware

app.use(express.json());

// ajustess

app.use('/api/',ejercicio);

app.use('/api/',ejercicio_usuario);

app.use('/api/',rutina);

app.use('/api/',rutina_usuario);

app.use('/api/',usuario);
