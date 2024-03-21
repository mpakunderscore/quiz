let {Op, Sequelize} = require("sequelize");
// require("sqlite3");
let {initModels, USER, HOST, CONFIG} = require("./models.ts");
import {randomUUID} from "node:crypto";


// console.log(process.env.DATABASE_URL)

//  TODO Sync TODO TODO
let FORCE = false

require('dotenv').config()

let sequelize

// console.log(process.env.DATABASE_URL)

const initDatabase = () => {

    // SQLite database file path
    const dbPath = './database.sqlite';

    try {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: dbPath, // Path to database file
            logging: false,
        });
    } catch (e) {
        console.log(e);
    }

    // console.log(sequelize)

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

const updateHost = async (clientHost) => {

    // TODO check here if points change > 1 user go to type ai

    let [host, created] = await HOST.findOrCreate({where: {uuid: clientHost.uuid}})
    host.status = clientHost
    await host.save()
    return host
}

const getHosts = async (limit = '1000', order = 'createdAt') => {
    return await HOST.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

const getConfig = async (limit = '1000', order = 'createdAt') => {
    return await CONFIG.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

const getUUID = async () => {
    console.log('getUUID')
    return await CONFIG.findOne({where: {name: 'uuid'}})
}

const newUUID = async () => {
    return await CONFIG.create({name: 'uuid', value: randomUUID() + ''})
}


export {
    initDatabase, updateHost, getHosts, getConfig, getUUID, newUUID
}