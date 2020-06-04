import express from 'express';
import knex from './database/connection'

const routes = express.Router(); //serve para desacoplar as rotas dos arquivos principal. P

routes.get('/items', async (request, response) => {
    
    const items = await knex('items').select('*'); //SELECT * FROM items

    const serializedItems =  items.map(item => { //map percorre todos os itens 
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`, //criando campo somente para trazer os itens
        };
    })

    return response.json(serializedItems);
});  

export default routes; 