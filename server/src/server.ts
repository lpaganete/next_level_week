import express, { request, response } from 'express';

const app = express();

app.use(express.json());

//Rotas são semanticas

//GET: serve para buscar uma ou mais informações no back-end
//POST: quando queremos criar uma nova informação no back-end
//PUT: quando quero atualizar uma informação existente no backend
//DELETE: quando quero remover uma informação do nack-end

//EX:
//POST http://localhost:3333/users = criar um usuário
//GET http://localhost:3333/users = criar usuários
//GET http://localhost:3333/users/5 = Buscar dados do usuario com id 5

//Quase todo backend é contruído emcima de rotas!

//Request Params = Parâmetros que vem na própia rota que identificam um recurso
//Query Param = São parâmetros que vem na própia rota também que geralmente são opcionais 
//Request body = Parametros para criação e atualização de usuários

//Banco de dados SQLITE
// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')   //VANTAGEM: conseguimos hadaptar essa query para qualquer db 

const users = [
    'Diego',   //0
    'Cleiton', //1
    'Luis',    //2
    'Robson',      //3
] 

//Rota get que retorna todos os usuários
app.get('/users', (request, response) => {
    
    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; 

    console.log(filteredUsers);
    
    return response.json(filteredUsers); //dando uma resposta para o cliente
});

app.get('/users/:id', (request, response) => {
    
    const id = Number(request.params.id); // O request.parms vai ser usado quando queremos buscar um único usuário, atualizar um único usuário

    const user = users[id];

    return response.json(user);
});


//rota post
app.post('/users', (request, response) => {

    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    }
    return response.json(user); //retornando os dados do usuário (sempre que for usar o respons, colocar o return antes dele)
});

app.listen(3333); 