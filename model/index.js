const {Sequelize,DataTypes, Error}=require('sequelize')
const databaseConfig = require('../config/dbconfig')
const makeBlogTable = require('./blogModel')
const makeUserTable = require('./userModel')
const sequelize=new Sequelize(databaseConfig.db,databaseConfig.username,databaseConfig.password,{
    host:databaseConfig.host,
    port:databaseConfig.port,
    dialect:databaseConfig.dialect,
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

db.blogs = makeBlogTable(sequelize,DataTypes)
db.users =makeUserTable(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{
    console.log("Synced done")
})

module.exports=db