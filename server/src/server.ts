import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");

    response.json([
        'Diego',
        'Cleiton',
        'Luis', 
        'ze',
    ]); //dando uma resposta para o cliente
});

app.listen(3333);