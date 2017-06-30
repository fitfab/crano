import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import router from './routes/catch-all'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))

// pass the static files (react app) to the express app.
app.use(staticFiles)


app.use('/',router)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
