import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))

// pass the static files (react app) to the express app.
app.use(staticFiles)

router.get('/users', (req, res) => {
  const users = [
    {firstName: 'John', lastName: 'Smith'},
    {firstName: 'Lory', lastName: 'Munoz'},
    {firstName: 'Zelma', lastName: 'Yugar'},
    {firstName: 'Miguel', lastName: 'Julio'},
  ]
  res.json(users)
})
app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
