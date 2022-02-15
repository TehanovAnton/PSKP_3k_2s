const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize(
    'pskp', 'andrew', 'andrew',
    { 
        dialect:'mssql', 
        pool: { max:5, min:0, acquire:30000, idle:10000 } 
    }
);

const { Faculty, Pulpit, Teacher, Subject, Auditorium_type, Auditorium} = require('./18-02m').ORM(sequelize);

let facultiesQuery = () => {
    Faculty.findOne({ where: { Faculty: "HTiT" }, include: {
            model: Pulpit,
            as: 'pulpits',
            include: {
                model: Teacher,
                as: 'teachers',
            }
        },
        attributes: []
    })
    .then(faculty => {

        console.dir(faculty.pulpits);
    })
    .catch(error => {
        console.log(error);
    })
}

let pulpitsQuery = () => {
    Pulpit.findAll({ where: { faculty: 'HTiT' },
        include: {
            model: Teacher,
            as: 'teachers',
        }
    })
    .then(pulpits => {
        let teachers = []
        pulpits.forEach(p => {
            teachers.push(p.teachers)
        });

        console.dir(JSON.stringify(teachers))
    })
    .catch(error => {
        console.log(error);
    })
}

let teachersQuery = () => {
    Teacher.findOne({ where: { Teacher: "AKNVCH" }
    })
    .then(teacher => {
        console.dir(teacher);
    })
    .catch(error => {
        console.log(error);
    })
}

pulpitsQuery();