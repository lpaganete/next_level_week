
import { Request, Response } from 'express'; 
import knex from '../database/connection'; 

class ItemsController {
    async index(request: Request, response: Response) {
    
        const items = await knex('items').select('*'); //SELECT * FROM items
    
        const serializedItems =  items.map(item => { //map percorre todos os itens 
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`, //criando campo somente para trazer os itens
            };
        })
    
        return response.json(serializedItems);
    }
}

export default ItemsController;