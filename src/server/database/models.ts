
// lang domain
const {DataTypes, Model} = require("sequelize");

class ADMIN extends Model {
}
class USER extends Model {
}

class GAME extends Model {
}

class HOST extends Model {
}

class CONFIG extends Model {
}

class SCENARIO extends Model {
}

let initModels = (sequelize) => {

    ADMIN.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {sequelize, modelName: 'admin', timestamps: true})

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

    GAME.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
        },
        users: {
            type: DataTypes.JSONB,
        },
        state: {
            type: DataTypes.JSONB,
        },
    }, {sequelize, modelName: 'game', timestamps: true})

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

    SCENARIO.init({
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
            type: DataTypes.JSONB,
        },
    }, {sequelize, modelName: 'scenario', timestamps: true})

}

export {
    USER, HOST, CONFIG, initModels
}