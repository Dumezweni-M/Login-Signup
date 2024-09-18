const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})


app.post('/users', async (req, res) => {
    try{
      const salt  = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(req.body.password, salt)

      console.log(`Salt : ${salt}`)
      console.log(`hashed ${hashedPassword}`)

      const user = { name: req.body.name, password: hashedPassword}
      users.push(user)

      console.log('Pushed users :' +  user);
      res.status(201).send()

    } catch{
        res.status(500).send('Error creating user')
    }
    
})




app.listen(3000, () => {
    console.log("Server is Up!");
})