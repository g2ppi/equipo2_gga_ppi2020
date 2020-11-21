const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM tipousuario', (err,rows,fields)=>{

  
    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

  
})//fin conexion consultada
});//fin mostrar todos los usuarios


router.get('/tipousuario/id:', (req, res) => {
const {id}= req.params;

  mysqlConnection.query('SELECT * FROM tipousuario WHERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
