const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const puerto = 3001;
const { Pool } = require("pg");//MAS EFICIENTE

// contacto: id, nombre, apellido, numero
const pool = new Pool({
  user: "postgres",
  host: "10.0.30.163",
  database: "prueba",
  password: "Ginxasur08",
  port: 5433,
});

app.use(bodyParser.json());

app.use("/contactos", (request, response, next) => {
  console.log("ingresa a funcion de middleware");
  console.log("headers: ", request.headers);
  console.log("body: ", request.body);
  next();
});

app.delete("/contactos/:idParam", (request, response) => {
  const id = request.params.idParam;
  console.log(id);
  console.log("Ingresa al delete");
  pool.query("DELETE FROM contactos WHERE id=$1 RETURNING *", [id]);
  response.send({ id: id });
});

app.put("/contactos/:idParam", (request, response) => {
  const id = request.params.idParam;
  const { nombre, apellido, celular } = request.body;
  console.log(id);
  pool.query(
    "update contactos set nombre=$1, apellido=$2, celular=$3 where id=$4 returning *",
    [nombre, apellido, celular, id]
  );
  response.send("put contactos");
});

app.post("/contactos", (request, response) => {
  const { nombre, apellido, celular } = request.body;
  pool.query(
    "insert into contactos (nombre, apellido, celular) values ($1, $2, $3) returning *",
    [nombre, apellido, celular]
  );
  response.send("creado");
});

app.get("/contactos", (request, response) => {
  console.log("ingresa a get");
  pool
    .query("select * from contactos")
    .then((responseQuery) => {
      console.log(responseQuery.rows);
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

// permite levantar un servidor web ---> listen
app.listen(puerto, () => {
  console.log("Hola, probando en el puerto " + puerto);
});
