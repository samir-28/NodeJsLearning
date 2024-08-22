const makeBlogTable= (sequelize,DataTypes)=>{
    const Blog = sequelize.define('blog',{
        title :{
            type:DataTypes.STRING,
            allowNUll:false
        },
        subttitle:{
            type:DataTypes.STRING,
            allowNUll:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        image:{
            type:DataTypes.STRING
        }
    })
    return Blog
}

module.exports = makeBlogTable