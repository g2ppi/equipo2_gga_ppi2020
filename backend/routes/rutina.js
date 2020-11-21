const express = require('express');//tabNIne
const router = express.Router();
const mysqlConnection =require('../db/db');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Rutina', (err,rows,fields)=>{
  
      if(!err){
          res.json(rows);
      } else {
          console.log(err);
      }
  

  })//fin conexion consultada
  });//fin mostrar todas las Rutina
  
  router.get('/Rutina/id:', (req, res) => {
  const {id}= req.params;
  mysqlConnection.query('SELECT * FROM Rutina WHERE id=?', [id], (err,rows,fields)=>{
      if(!err){
          res.json(rows[0]);
      } else {
          console.log(err);
      }

      })//fin conexion consultada por id 
  
  });//fin buscar rutina por su id  
      
  //Agregar una nueva rutina


  router.post("/nueva-Rutina", (req, res) => {
      const { alarma, fecha, hora } = req.body;
      let Rutinarray= [ alarma, fecha, hora ];
      let nuevaRutina='INSERT INTO Rutina {alarma, fecha, hora}VALUES(?,?,?)';
      mysqlConnection.query(nuevaRutina, Rutinarray,(err,results,fields)=>{
        
          if(err){
          return console.error(err);
      }else{
          res.json({message:nombre + 'Rutina creada'})
      }
      
