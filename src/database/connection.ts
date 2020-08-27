import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'admin',
        database: 'nlw-ecoleta'
        // filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection