import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3', //qual banco de dados estamos usando
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), //qual vai ser o aquivo que a gente vai armazenar o db //função resolve basicamente une caminhos
    },
}); 

export default connection;