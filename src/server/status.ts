import {randomUUID} from "node:crypto";
const {getSettings, getUUID, newUUID} = require("./database/database.ts");
const PACKAGE = require("../../package.json");

const axios = require('axios');
const os = require('os');

// console.log(fetch)

// const mainServerUrl = 'http://209.38.178.175:2000'
const mainServerUrl = 'http://localhost:2000'
const prefix = '/api'

const initStatus = async () => {

    const getSystemInfo = () => {
        const networkInterfaces = os.networkInterfaces()
        const [exampleInterface] = Object.values(networkInterfaces).flat().filter(i => !i['internal'] && i['family'] === 'IPv4')
        return exampleInterface
    }

    const getLogin = async () => {
        const uuidObject = await getUUID()
        console.log(uuidObject)
        let uuid = uuidObject ? uuidObject.dataValues.value : false
        console.log(uuid)
        if (!uuid) {
            uuid = (await newUUID()).dataValues.value
        }

        return uuid
    }

    const systemInfo = getSystemInfo()
    systemInfo['uuid'] = await getLogin()
    systemInfo['version'] = PACKAGE.version
    // systemInfo['uuid'] = randomUUID()

    postStatus(systemInfo)

    console.log('STATUS INIT')
}

const postStatus = (systemInfo) => {
    // console.log(systemInfo)

    const statusUrl = mainServerUrl + prefix + '/status'

    // console.log(statusUrl)

    axios.post(statusUrl, systemInfo).then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        // console.warn(error)
    });
}

export {
    initStatus
}