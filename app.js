const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./assets/config.json')

var app = express()
let expressRouter = express.Router()

let Mail = require('./mail')(config)

app.use(cors())
app.use(bodyParser.json())

expressRouter.route('/send_email').post(async (req, res) => {
    console.log(req.body);
    let email = await Mail.sendMail(req.body);
    res.json(email);
})

app.use(config.rootApi, [expressRouter])
app.listen(config.port, () => {
    console.log('Started on port ' + config.port)
})
