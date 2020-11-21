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
    })//fin conexion consultada por id 
    
    });//fin buscar usuario por su id 
    //Agregar un nuevo ejercicio
    
    router.post("/nuevo-ejercico", (req, res) => {
const { nombre, descripcion } = req.body;
        let ejerciciorray= [ nombre, descripcion ];
        let nuevoejercicio='INSERT INTO ejercicio {nombre, descripcion}VALUES(?,?)';
mysqlConnection.query(nuevoejercicio, ejerciciorray,(err,results,fields)=>{
        
        if(err){
return console.error(err);
        }else{
            res.json({message:nombre + 'ejercicio creado'})
        }
    
    })
    }); //fin guardar nuevo ejercicio
router.put("/ejercicio/:id", (req, res) => {
        const { nombre, descripcion } = req.body;
        const {id} = req.params;
mysqlConnection.query('UPDATE ejercicio set nombre=?,descripcion=? WHERE id=?',
        [nombre, descripcion, id],(err, rows, fields)=>{
            if(err){
                res.json({status:'nombre' +nombre + 'actualizado'})
            }else{
console.log(err);
            }//fin si
        })//fin consulta 
});//fin modificar un ejercicio
 router.delete("/ejercicio/:id", (req, res) => {
            const {id} = req.params;
            mysqlConnection.query('DELETE FROM ejercicio WHERE id=?',
            [id],(err, rows, fields)=>{
                if(err){
res.json({status:'ejercicio eliminado'})
                }else{
                    console.log(err);
}//fin si
            });//fin elimnar
});//fin eliminar un ejercicio
    
    module.exports = router
