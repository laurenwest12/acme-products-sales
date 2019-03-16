const Sequelize = require('sequelize')
const db = require('./db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false},
discount: {
    type: Sequelize.INTEGER, 
    max: 75,
    min: 0},
availability: {
    type: Sequelize.STRING,
    }
})

module.exports = Product
