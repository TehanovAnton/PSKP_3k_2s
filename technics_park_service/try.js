const Sequelize = require('sequelize');
const { DB_NAME, USER_NAME, USER_PASSWORD } = require('./db/database');

const sequelize = new Sequelize(
    DB_NAME, USER_NAME, USER_PASSWORD,
    { dialect:'mssql', pool: { max:5, min:0, acquire:30000, idle:10000 } }
);

const { Role } = require('./models/role').Role();


let rolesCreateExample = () => {
    Role.create({ title:'hay' })
    .then ((task) => {
        console.log(task);
    })
    .catch(err => {
        console.log(err);
    });
}

let rolesGetAllExample = async () => {
    roles = await Role.findAll();
    console.log(JSON.stringify(roles));
}

rolesGetAllExample();
