const PORT = 3001;
const server = require("./app");
const { sequelize } = require("./DB_connection");
const {saveApiData} = require("./controllers/saveApiData");

server.listen(PORT,async()=>{
    await sequelize.sync({force: true});
    console.log("DB conectada")
    // console.log(await saveApiData());
    await saveApiData();
    console.log('Server levantado en puerto ' + PORT)
});