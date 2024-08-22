const { password } = require("../config/dbconfig")

const makeUserTable= (sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        username :{
            type:DataTypes.STRING,
            allowNUll:false
        },
        email:{
            type:DataTypes.STRING,
            allowNUll:false
        },
        password:{
            type:DataTypes.STRING,
            allowNUll:false
        },
        image:{
            type:DataTypes.STRING
        }
    })
    return User
}

module.exports = makeUserTable