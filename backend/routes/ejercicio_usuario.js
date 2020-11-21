const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM ejercicio_usuario', (err,rows,fields)=>{
 if(!err){
            res.json(rows);
        } else {
console.log(err);
        }
})//fin conexion 
    });//fin mostrar todos los ejercicios
