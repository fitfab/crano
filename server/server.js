import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const router = express.Router()
router.get('/users', (req, res) => {
  const cities = [
    {firstName: 'John', lastName: 'Smith'},
    {firstName: 'Lory', lastName: 'Munoz'},
    {firstName: 'Zelma', lastName: 'Yugar'},
    {firstName: 'Miguel', lastName: 'Julio'},
  ]
  res.json(cities)
})
app.use(router)
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
