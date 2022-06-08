const express = require('express')
const {WebhookClient, Card} = require('dialogflow-fulfillment')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Server Is Working......")
})/**
 * on this route dialogflow send the webhook request
 * For the dialogflow we need POST Route.
 * */
app.post('/webhook', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})    // create intentMap for handle intent
    let intentMap = new Map();    // add intent map 2nd parameter pass function
    intentMap.set('Products Info Intent',handleWebHookIntent)    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})

function handleWebHookIntent(agent){
    agent.add('Hemos encontrado algunos articulos que te pueden interesar: ');
    agent.add(new Card({
        title: "Jeans EA Sport",
        text: "El precio es de $12.5"
    }));
    agent.add(new Card({
        title: "Jeans Tommy H Summer",
        text: "El precio es de $59.99"
    }))
}/**
 * now listing the server on port number 3000 :)
 * */
app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})
