const express = require("express");
const app = express();

//base de datos
const estudiantes = [];

//middlewares
app.use(express.json());

//configuracion
app.set("port", process.env.PORT || 4321);

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

//agregar nuevos estudiantes
app.post("/students", (req, res) => {
    const {fullName, age, curse} = req.body;
    const id = new Date().getTime();
    const nuevoEstudiante = {
        id,
        fullName,
        age,
        curse
    }
    estudiantes.push(nuevoEstudiante);
    res.json(estudiantes);
})

//servidor
app.listen(app.get("port"), () => {
    console.log(`el servidor esta funcionando en el puerto ${app.get("port")}`);
})