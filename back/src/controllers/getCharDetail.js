const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res){
    //localhost:3001/rickandmorty/onsearch/1
    const { detailId } = req.params;
    try {
        const response = await axios(URL + detailId);
        const character = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            gender: response.data.gender,
            species: response.data.species,
            //agregamos:
            status: response.data.status,
            origin: response.data.origin?.name,
        };
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {getCharDetail};