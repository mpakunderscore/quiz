let { OpenAI } = require("openai")
require('dotenv').config();
let key = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    apiKey: key, // defaults to process.env["OPENAI_API_KEY"]
})

const initGPT = async () => {
    const models = await getModels()
    // console.log(models)
    console.log(models.filter(model => model.id.startsWith('gpt-4')))
    console.log('GPT UP')
}

const getModels = async (text) => {
    const time = new Date()

    try {
        const completion = await openai.models.list()
        // console.log(completion.choices[0].message.content)
        console.warn((new Date().getTime() - time.getTime())/1000)
        return completion.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

const getChat = async (text) => {
    const time = new Date()
    // const completion = await openai.models.list()
    // console.log(completion.data)
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{"role": "user", "content": text}],
            // stream: true,
        })
        // console.log(completion.choices[0].message.content)
        console.warn((new Date().getTime() - time.getTime())/1000)
        return completion.choices[0].message.content;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

// const getImage = async (text, style = '', params = '', baseImage = '') => {
//
//     const prompt = 'NO TEXT | ' + baseImage + ' | ' + text + ' | ' + style + ' | ' + params // + ' --chaos 13'
//
//     const response = await openai.images.generate({
//         "prompt": prompt,
//         "n": 1,
//         "size": "256x256"
//     })
//     return response.data
//     // console.log(response.data.choices[0].message.content)
// }

// getChat('Describe some simple unpleasant event that could happen to a robot in the city. The response should only contain a description of the event. In JSON format where the text field is at the root')
// getChat('game about red forest ai robots killers point:PORTAL|This strange construction may be way to somewhere|Tell me story')

module.exports = { getChat, getModels, initGPT }