let {Op, Sequelize} = require("sequelize");
let {initModels, USER, TOKEN} = require("./models");

// console.log(process.env.DATABASE_URL)

//  TODO Sync TODO TODO
let FORCE = false

require('dotenv').config()

let sequelize

// console.log(process.env.DATABASE_URL)

const initDatabase = () => {

    // Init
    try {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
            logging: false,
        })
    } catch (e) {
        console.log(e)
    }

    // Auth
    try {
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully')
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }

    sequelize.sync({force: FORCE, alter: true}).then(async () => {
        console.log('DB SYNC' + (FORCE ? ' FORCE' : ''))
    })

    // Models
    initModels(sequelize)
}

const getUsers = async (limit = '1000', order = 'createdAt') => {
    return await USER.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

const getUser = async (uuid) => {
    const user = USER.findOne({where: {uuid: uuid}})
    return user
}

const getToken = async (tokenName) => {
    const token = TOKEN.findOne({where: {title: tokenName}})
    return token
}

const getTokens = async (limit = '1000', order = 'createdAt') => {
    return await TOKEN.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

const setToken = async (aiToken) => {
}

// const updatePoints = async (clientUser) => {
//     let user = await USER.findOne({where: {uuid: clientUser.uuid}})
//     const updateApproved = true
//     if (user && updateApproved) {
//         user.stats.points = clientUser.stats.points + 1
//         await user.save()
//     }
// }
//
const updateUser = async (clientUser) => {

    // TODO check here if points change > 1 user go to type ai

    let [user, created] = await USER.findOrCreate({where: {uuid: clientUser.uuid}, clientUser})
    return user
}



export {
    initDatabase, getUser, getUsers, getToken, getTokens, setToken
}