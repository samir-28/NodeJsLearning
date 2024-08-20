const {Sequelize,DataTypes, Error}=require('sequelize')
const sequelize=new Sequelize('haha','root','',{
    host:'localhost',
    port:3306,
    dialect:'mysql',
    operatorsAliases: false,  
    pool:{               //waiting time for database connection
        max:5,             
        min:0,
        acquire:3000,
        idle:10000
    }
})

sequelize.authenticate()
.then(()=>{
    console.log("Correct username and password")
})
.catch((err)=>{
    console.log("There is Error",err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

//db={
 //   Sequelize:Sequelize,
 //   sequelize:sequelize
//}

db.sequelize.sync({force:false}).then(()=>{
    console.log("Synced done")
})

module.exports=db