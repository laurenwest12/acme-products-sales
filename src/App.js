import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Products from './Products'
import CreateProduct from './CreateProduct'
import axios from 'axios'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        products: [],
        product: {

        }
    }
  }

  async componentDidMount () {
    const res = await axios.get('/api/products')
    this.setState({products: res.data})
  }

  handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`)
    const res = await axios.get('/api/products')
    this.setState({products: res.data})
  }

  handleChange = async ({target}) => {
    this.setState({
      product: {...this.state.product, [target.name]: target.value}
    }, () => console.log(this.state.product))
  }

  handleSubmit = async (event) => {
    console.log(this.state.product)
  }

  render() {
    console.log('rendering')
    return (
      <HashRouter>
        <div>
          <h1>Acme Products/Sales </h1>
          <Nav/>
          <Route exact path = '/products' render = {() => <Products products = {this.state.products} handleDelete = {this.handleDelete}/>}/>
          <Route path = '/products/sales' render = {() => <Products products = {this.state.products.filter(product => ( product.discount
          ))}  handleDelete = {this.handleDelete}/>}/>
          <Route path = '/products/create' render = {() => <CreateProduct product = {this.state.product} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>}/>
        </div>
        </HashRouter>

    )
  }
}

