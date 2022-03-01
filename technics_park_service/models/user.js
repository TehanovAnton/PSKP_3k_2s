const { sequelize } = require('../db/database');
const { Model, Sequelize } = require('../initializers/sequelize');
const Role = require('./role').Role();

class User extends Model {};

function initialize(sequelize)
{
    User.init(
        { 
            nickname: { type:Sequelize.STRING, allowNull:false },
            email: { type:Sequelize.STRING, allowNull:false, unique: true },
            password: { type:Sequelize.STRING, allowNull:false },
            role_id: { 
                type:Sequelize.BIGINT, allowNull:false,
                references:{ model:Role, key:'id' }
            }
        },
        { sequelize, modelName:'User', tableName:'users', timestamps: false }
    );

    Role.hasMany(User, { as:'users', foreignKey:'id', onDelete:'cascade' })
    User.belongsTo(Role, { foreignKey: 'id' });
}

module.exports.User = () => { 
    initialize(sequelize);
    return User
};
