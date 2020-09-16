import knex from 'knex';
import path from 'path';

// migration - controlam as versões do banco de dados

const db = knex({
    client: 'splite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault:true,
});

export default db;