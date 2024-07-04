const express = require("express");
const app = express();

//base de datos
const estudiantes = [];

//middlewares
app.use(express.json());

//configuracion
app.set("port", process.env.PORT || 4321);

//servidor
app.listen(app.get("port"), () => {
    console.log(`el servidor esta funcionando en el puerto ${app.get("port")}`);
})

//rutas 
//Lista de estudiantes
app.get("/students", (req, res) =>{
    res.json(estudiantes);
})

app.get("/students/:id", (req, res) =>{
    const id = +req.params.id;
    const estudianteId = estudiantes.findIndex(e => e.id === id);
    res.json(estudianteId);
})
