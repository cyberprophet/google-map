import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express()

app.use(express.static('public'))

app.listen(8080, () =>
{
    console.log('listening 8080')
})
app.get('/', (request, response) =>
{
    response.sendFile(__dirname + '/index.html')
})