const express= require('express');
const app = express();

// definir todos los componentes, modulos app
const ejercicio= require('./routes/ejercicio');// crud

const ejercicio_usuario = require('./routes/ejercicio_usuario');// crud

const rutina = require('./routes/rutina');// crud

