
// lang domain
const {DataTypes, Model} = require("sequelize");

class USER extends Model {
}

class TOKEN extends Model {
}

let initModels = (sequelize) => {

    USER.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.STRING,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
        },
        tokens: {
            type: DataTypes.JSONB,
        },
    }, {sequelize, modelName: 'user', timestamps: true})

}

module.exports = {
    USER, TOKEN, initModels
}