const express = require('express')
const mongoose = require('mongoose')


const PORT = 3333

const app = express()

mongoose.connect('url/banco', {
    useUnifiedTopoly: true,
    useNewUrlParser: true
}, () => console.log('Connected to database'));

app.get('/', (req,res) => {console.log('hello world')});

app.listen(PORT, () => console.log(`Server is running ${PORT}`))


