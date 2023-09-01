const connectMongo = require('./db')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

connectMongo();
app.use(cors())


app.use(express.json());  //enables json communication
app.use('/api/authe',require('./routes/auth'));
app.use('/api/blogs',require('./routes/blogs'));



app.get('/', (req, res) => {
  res.send('Hello Wfgvdfghbjnmbhnmorld!')
})

app.listen(port, () => {
  console.log(`Example app listendrfgvbing on port ${port}`)
})