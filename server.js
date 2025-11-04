const express = require('express')
const app = express()
const port = 3000
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const connectDb = require('./config/db')

connectDb;
// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Hello World! guysssss')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
