import express, { request, response } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Diego',   
    'Cleiton', 
    'Luis',    
    'Robson',     
] 



app.listen(3333); 