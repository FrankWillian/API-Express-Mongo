const express = require('express')

const PORT = 3333

const app = express()

app.listen(PORT, () => console.log(`Server is running ${PORT}`))

