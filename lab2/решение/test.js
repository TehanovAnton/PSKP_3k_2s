const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize(
    'pskp', 'anton', 'ewqqwe',
    { 
        dialect:'mssql', 
        pool: { max:5, min:0, acquire:30000, idle:10000 } 
    }
);

const { Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('./18-02m').ORM(sequelize);

Faculty.findOne({ where: { Faculty: "HTiT" }, include: { model: Pulpit, as: 'pulpits' } })
    .then(faculty => {
        console.dir(faculty.pulpits);
    })
    .catch(error => {
        console.log(error);
    })