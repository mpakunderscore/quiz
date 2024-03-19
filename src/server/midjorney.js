// import {progress} from "../../queue/progressEventEmitter";

const {Midjourney} = require("midjourney")
// const progress = require('../../queue/progressEventEmitter')

require('dotenv').config()

const client = new Midjourney({
    ServerId: process.env.SERVER_ID,
    ChannelId: process.env.CHANNEL_ID,
    SalaiToken: process.env.SALAI_TOKEN,
    Debug: false,
    Ws: true, //enable ws is required for remix mode (and custom zoom)
})

//Simon Stalenhag

const generateImage = async (text, style = '', params = '') => {

    const time = new Date()

    try {
        await client.init()
    } catch (e) {
        console.error(e)
    } finally {
        console.log('HERE')
    }


    // const style = 'Studio Ghibli'
    // const style = 'Simon Stalenhag'

    // const baseImage = 'https://s.mj.run/S-ljZY_Z50w'
    const prompt = 'WITHOUT TEXT | ' + style + ' | ' + text + ' | ' + params // + ' --chaos 13'

    //imagine
    let imagine
    try {
        // progress.emit('progress', 1)
        imagine = await client.Imagine(prompt, (uri, progressPercent) => {
            // progress.emit('progress', parseInt(progressPercent))
            console.log("loading", uri, "progress", progressPercent);
        })
    } catch (e) {
        console.error(e.message)
        return
    }
    console.log(imagine.uri)

    const U1CustomID = imagine.options?.find((o) => o.label === "U1")?.custom;
    if (!U1CustomID) {
        console.log("no U1");
        return;
    }

    const upscale = await client.Custom({
        msgId: imagine.id,
        flags: imagine.flags,
        customId: U1CustomID,
        loading: (uri, progressPercent) => {
            // progress.emit('progress', 50 + parseInt(progressPercent))
            console.log("loading", uri, "progress", progressPercent)
        },
    })

    if (!upscale) {
        console.log("no Upscale")
        return;
    }

    console.log(upscale.uri)

    console.warn((new Date().getTime() - time.getTime())/1000)

    return upscale.uri
}

// console.log(generateImage('robot'))

module.exports = {
    generateImage
}