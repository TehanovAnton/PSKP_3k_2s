const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'pskp', 'andrew', 'andrew',
    { 
        host: 'localhost', dialect: 'mssql', 
        pool: { max:5, min:0, acquire:30000, idle:10000 }
    }
);

let testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection()