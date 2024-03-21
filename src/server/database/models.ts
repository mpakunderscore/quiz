
// lang domain
const {DataTypes, Model} = require("sequelize");

class USER extends Model {
}

class HOST extends Model {
}

class CONFIG extends Model {
}

let initModels = (sequelize) => {

    USER.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {sequelize, modelName: 'user', timestamps: true})

    HOST.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.JSONB,
        },
    }, {sequelize, modelName: 'host', timestamps: true})

    CONFIG.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        value: {
            type: DataTypes.TEXT,
        },
    }, {sequelize, modelName: 'config', timestamps: true})

}

export {
    USER, HOST, CONFIG, initModels
}