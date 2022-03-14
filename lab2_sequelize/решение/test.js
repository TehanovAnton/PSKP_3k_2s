const { Sequelize, Op } = require('sequelize');
const Model = Sequelize.Model;
const { DB_NAME, USERNAME, USERPASSWORD } = require('./db_connection')
const sequelize = new Sequelize(
    DB_NAME, USERNAME, USERPASSWORD,
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

let auditoriumsQuery = () => {
    Auditorium.findOne(
        {where:{auditorium:"newa"}}
    )
    .then(auditorium => {
        console.log(auditorium);
    })
    .catch(err => {
        console.log(err);
    });
}

let auditoriumUpdate = () => {
    Auditorium.update({
        auditorium_name:"newAN",
        auditorium_capacity:"77",
        auditorium_type:"newat"
    },
        {where:{auditorium:"newa"}}
    )
    .then(task => {
        if(task>0) {
            console.log(task);
        }
        else
        {
            console.log(`{"error":2,"message":"“акой аудитории дл€ обновлени€ не существует"}`); 
        }
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
    });
}

let auditoriumScope = () => {
    let a = Auditorium.scope('capacity', { method: ['capacity', 90] })
    a.findAll()
    .then(all => {
        console.dir(all)
    })
}

let auditoriumTransaction = async () => {    
    const t = await sequelize.transaction();

    await Auditorium.update(
        { auditorium_capacity: 0 },
        { 
            transaction: t,
            where: { 
                auditorium_capacity: { [Op.gt]: -1 } 
            } 
        }
    )

    setTimeout(() => { t.rollback() }, 10000)    
}

auditoriumTransaction()