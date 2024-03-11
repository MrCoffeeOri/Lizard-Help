import { config } from 'dotenv'
import express from "express"
import cors from 'cors'

const app = express()
const port = 3000

config()
app.use(cors())

app.get('/', (req, res) => {
})


app.listen(port, () => console.log(`Listening on port ${port}`))