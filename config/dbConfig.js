const databaseConfig={
    db: process.env.DB,
    username:process.env.USERNAME1,
    password: process.env.PASSWORD,
    host : process.env.HOST,
    port :3306,
    dialect:'mysql'
}

module.exports= databaseConfig