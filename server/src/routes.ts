import express from 'express';


const routes = express.Router(); //serve para desacoplar as rotas dos arquivos principal. P

routes.get('/', (request, response) => {
    return response.json({ message: "Hello world" });
});  

export default routes;