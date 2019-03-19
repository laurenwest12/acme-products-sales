const express = require('express');
const app = express();
const path = require('path');
const syncAndSeed = require ('./server/db/index').syncAndSeed
const Product = require('./server/db/index').Product
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
    Product.findAll()
    .then(products => res.send(products))
    .catch(next)
  })

  app.get('/api/products/:id', (req, res, next) => {
    Product.findByPk(req.params.id)
    .then(products => res.send(products))
    .catch(next)
  })
  
  app.get('/api/products/sales', (req, res, next) => {
    Product.findAll({
      where: {
        discount: {
          [Op.gt]: 0
       }
      }
    })
    .then(products => res.send(products))
    .catch(next)
  })

  app.delete('/api/products/:id', (req, res, next) => {
    Product.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.status(204).end())
    .catch(next)
  })

  app.post('/api/products', (req, res, next) => {
    console.log(req.body)
    Product.create(req.body)
    .then(product => res.send(product))
    .catch(next)
  })
  
  syncAndSeed()
    .then(() => app.listen(port, () => console.log(`App is listening on ${port}`)))
