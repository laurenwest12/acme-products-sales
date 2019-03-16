const Sequelize = require('sequelize')
const db = require('./db')
const Product = require('./Product')


const syncAndSeed = () => {
  return db.sync({force: true})
  .then (() => {
    return Promise.all([
      Product.create({name: 'Foo', price: 5, discount: 15, availability: 'instock'}),
      Product.create({name: 'Bar', price: 10, discount: 0, availability: 'instock'}),
      Product.create({name: 'Bazz', price: 15, discount: 0, availability: 'discontinued'}),
      Product.create({name: 'Bar', price: 10, discount: 50, availability: 'backordered'})
      ]
    )
  })
}

module.exports = {
  syncAndSeed,
  Product
}