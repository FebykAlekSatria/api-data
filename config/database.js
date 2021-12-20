import pkg from 'sequelize';
const { sequelize } = pkg;

const db = new pkg('heroku_0c9b9f1d20ce43b', 'b397e8bd1a041e', '7c2e52f5', {
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect: 'mysql'
})

export default db;