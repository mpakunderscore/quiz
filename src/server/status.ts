const axios = require('axios');
const os = require('os');

// console.log(fetch)

// const mainServerUrl = 'http://209.38.178.175:2000'
const mainServerUrl = 'http://localhost:2000'
const prefix = '/api'

const initStatus = () => {

    const getSystemInfo = () => {
        const networkInterfaces = os.networkInterfaces();
        const [exampleInterface] = Object.values(networkInterfaces).flat().filter(i => !i.internal && i.family === 'IPv4');

        // console.log(exampleInterface)

        // return {
        //     ipAddress: exampleInterface.address,
        //     macAddress: exampleInterface.mac,
        //     // Add other system information you might need
        // }

        return exampleInterface
    }

    const systemInfo = getSystemInfo()

    // console.log(systemInfo)

    const statusUrl = mainServerUrl + prefix + '/status'

    // console.log(statusUrl)

    axios.post(statusUrl, {systemInfo}).then(function (response) {
        console.log(response.data)
    }).catch(function (error) {
        // console.warn(error)
    });

    console.log('STATUS INIT')
}

export {
    initStatus
}