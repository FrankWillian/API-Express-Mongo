const express = require('express')
const mongoose = require('mongoose')


const PORT = 3333

const app = express()

mongoose.connect('url/banco', {
    useUnifiedTopoly: true,
    useNewUrlParser: true
}, () => console.log('Connected to database'));

const UserSchme = new mongoose.Schema({ username: String})
const User = mongoose.model('User', UserSchema)
const TodoSchema = new mongoose.Schema({ description: String, done: Boolean, user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}})
const Todo = mongoose.model('Todo', TodoSchema)

app.get('/', (req,res) => {console.log('hello world')});

app.listen(PORT, () => console.log(`Server is running ${PORT}`))


