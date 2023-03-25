const express = require("express");
const server = express();
const morgan = require("morgan");
const PORT = 3001;
const router=require("../src/routes/index");
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);
//server.use("/user", userRouter)

server.listen(PORT,()=>{
    console.log('Server levantado en puerto ' + PORT)
});