const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    // db creada https://console.clever-cloud.com/
host:'bpegmilzjbod5uj5dold-mysql.services.clever-cloud.com',
user:'umsrzew6nbbwl8ff',
password:'yD0lQug8dkxePI8dmoIG',
database:'bpegmilzjbod5uj5dold',
multipleStatements:true
/*
host:'181.133.136.83',
user:'mediatecnica',
password:'123',
database:'lab_mediatecnica',
*/
});
mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{
console.log ('base de datos conectada ');
}
