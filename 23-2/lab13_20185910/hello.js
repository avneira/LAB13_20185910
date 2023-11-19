const express = require("express");
const mysql = require("mysql2");
const app = express();

contentHTML += "<td>" + sedes.nombre +  no.apellidos + "</td>";
contentHTML += "<td>" + sedes.correo + "</td>";

const conn = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bicicentro"
});

app.get("/trabajadores",(req,res) => {
    let sql = "select * from trabajadores";
    conn.query(sql,(err, result, fields) => {
        if(err) throw err;
        console.log("Conexion");
        res.json(
            result
        );
    });

});

app.get("/trabajadores/:id", function (req,res) {
    let trabajador_dni = req.params.id;
    let sql = "SELECT * FROM bicicentro.trabajadores where dni = ?";
    let params = [trabajador_dni]
    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});

app.get("/trabajadores/ventas/:id", function (req,res) {
    let trabajador_dni = req.params.id;
    let sql = "SELECT * FROM bicicentro.ventas where dniTrabajador = ?";
    let params = [trabajador_dni]
    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});

app.get("/sedes",(req,res) => {
    let sql = "SELECT * FROM bicicentro.sedes;";
    conn.query(sql,(err, result, fields) => {
        if(err) throw err;
        res.json(
            result
        );
    });
});

app.get("/sedes/:id", function (req,res) {
    let sedeid = req.params.id;
    let sql = "SELECT * FROM bicicentro.sedes where idsede = ?";
    let params = [sedeid]
    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000');
});

