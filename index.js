const express = require('express')
const mongoose = require('mongoose')


const PORT = 3333

const app = express()

app.use(express.json())

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

app.post('/session', async (req,res) => {
    const {username } = req.body
    let user = ''
    try {
        user = await User.findOne({username})
        if (!user) {
            user = await User.create({username})
        }
        return res.status(200).send(user)
    } catch(err){
        return res.status(400).send(err)
    }
})

app.listen(PORT, () => console.log(`Server is running ${PORT}`))


