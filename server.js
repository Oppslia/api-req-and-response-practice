const express = require('express')
const app = express()
const port = 3001

app.use(express.json())




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



  app.post('/v1/feedme', (req, res) => {
    console.log(typeof x)
    console.log(req.body)
    console.log(req.body.food)
    msg = "Thank you for ordering "
    if (req.body.food){
      msg += `${req.body.food} with` // prints "wit" if && statement is not there.
      if (req.body.topping && req.body.topping.length != 0){
        for (top of req.body.topping){
          msg += ` ${top},`// why do i have to use of?
        }
        msg = msg.substring(0, msg.length -1)
        res.send(msg)
      }
      else{ msg += ' no toppings!'; res.send(msg)}
    }
    else if (req.body.topping && req.body.topping.length != 0) {
      res.send("want some food with those toppings")
    }
    else{res.send("Order something!")}
  })
  app.get('/v1/feedme', (req, res) => {
    console.log(req.query.food)
    res.send('thank you for feeding me!')
  })