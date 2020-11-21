const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM ejercicio', (err,rows,fields)=>{
    
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
 })//fin conexion 
    });//fin mostrar todos los ejercicios
 router.get('/ejercicio/id:', (req, res) => {
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM ejercicio WHERE id= ?', [id], (err,rows,fields)=>{
        if(!err){
  res.json(rows[0]);
        } else {
            console.log(err);
        }
    
    
