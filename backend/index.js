require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoDB = require("./db")
const app = express()
const port = process.env.PORT || 5000
app.use(cors());

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get('/',(req,res) => {
    res.send('Hello World! -----')
})

mongoDB().then(()=>{
    app.listen(port, () => {
        console.log(`Exapmple app listen on ${port}`)
    })
})