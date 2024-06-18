const express = require('express')
const studentRoutes = require('./src/student/router')
const app = express()
const port = 3000

app.use(express.json())

console.log('Hi on console')

app.get('/', (req,res) => {
    res.send('Hello from Homepage')
})
app.use('/api/v1/students', studentRoutes)


app.listen(port, () => console.log(`App listening on PORT : ${port}`))