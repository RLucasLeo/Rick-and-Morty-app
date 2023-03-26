const app = require("../src/app");
const session = require("supertest");
const { response } = require("../src/app");
const agent = session(app);

describe("Route: GET rickandmorty/onsearch/:id", ()=>{
    it("Responde con status: 200",async ()=>{
        const response = await session(app).get("/rickandmorty/onsearch/1");
        // console.log(response);
        expect(response.statusCode).toBe(200);
    });
    test("Responde con un objeto con las propiedasdes: ...", async()=>{
        const response = await session(app).get("/rickandmorty/onsearch/1");
        expect(Object.keys(response.body)).toEqual([
            "id",
            "name",
            "image",
            "gender",
            "species",
        ]);
    });
    it("si hay un error responde con status: 500",()=>{
        return agent
                .get("/rickandmorty/onsearch/900")
                .send()
                .then((response)=> expect(response.statusCode).toBe(500));
    });
});