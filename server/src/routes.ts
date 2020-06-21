import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router(); //serve para desacoplar as rotas dos arquivos principal. P
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Listando os itens
routes.get('/items', itemsController.index); 

//Criando novo ponto de coleta
routes.post('/points', pointsController.create);

routes.get('/points', pointsController.index);


//Listar um ponto de coleta específico
routes.get('/points/:id', pointsController.show);

 
export default routes; 