const express = require("express");
require("dotenv").config();
// const session = require('express-session');
// const passport = require('./passport/passportConfig');
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

// Configura la sesión
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

/*Base de datos*/
dbConnection();

//Uso de CORS
app.use(cors());

//Directorio público, usando use() Middleware
app.use(express.static("public"));

//Lectira y parseo del body
app.use(express.json({ limit: '200mb' }));

//Rutas
/* Servicios que NO requieren JWT*/
app.use("/", require("./routes/test")); //Test genérico
app.use("/", require("./routes/login"));
app.use("/", require("./routes/saveNewTask")); //Rutas
app.use("/", require("./routes/saveNewUser")); //Rutas
app.use("/", require("./routes/getTaskList")); //Rutas
app.use("/", require("./routes/updateTask")); //Rutas
app.use("/", require("./routes/deleteTask")); //Rutas

app.listen(process.env.PORT, () => {
  console.log(`Server is runing, port: ${process.env.PORT}`);
});
