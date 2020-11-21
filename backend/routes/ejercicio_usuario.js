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
 router.get('/ejercicio_usuario/id:', (req, res) => {
    const {id}= req.params;
     mysqlConnection.query('SELECT * FROM ejercicio_usuario WHERE id= ?', [id], (err,rows,fields)=>{
        if(!err){
 res.json(rows[0]);
        } else {
            console.log(err);
        }
})//fin conexion consultada por id 
 });//fin buscar usuario por su id
//Agregar un nuevo ejercicio
  router.post("/nuevo-ejercico", (req, res) => {
        const { id_rutina, id_usuario } = req.body;
 let ejerciciorray= [id_rutina, id_usuario ];
        let nuevoejercicio='INSERT INTO ejercicio {id_rutina,
id_usuario}VALUES(?,?)';
        mysqlConnection.query(nuevoejercicio, ejerciciorray,(err,results,fields)=>{
if(err){
            return console.error(err);
        }else{
res.json({message:nombre + 'ejercicio_usuario creado'})
        }
 })
    }); //fin guardar nuevo ejercicio
 router.put("/ejercicio/:id", (req, res) => {
        const {id_rutina, id_usuario } = req.body;
        const {id} = req.params;
mysqlConnection.query('UPDATE ejercicio set id_rutina=?,id_usuario=? WHERE id=?',
 [id_rutina, id_usuario, id],(err, rows, fields)=>{
            if(err){
