import React, {Component} from 'react'

export default class Products extends Component {
    render() {
        const products = this.props.products
        console.log(products)
        return (
            <div id='main'>
            <ul className = 'list-group'>
                {products.map(product => (
                    <li className = 'list-group-item' key = {product.id}>
                        {product.name}
                        <br/>
                        <div style = {{textDecoration: product.discount && 'line-through'}}>
                            ${product.price}
                        </div>
                        <div style = {{display: !product.discount && 'none'}}>
                        <span className = 'badge badge-success'>                        
                            {product.discount ? (' $' + ((100 - product.discount) / 100) * product.price) : null}
                        </span>
                        <br/>
                        </div>
                        <span className = {product.availability === 'instock' ? 'badge badge-success' : 'badge badge-warning'}>
                            {product.availability}
                        </span>
                        <br/>
                        <button className = 'btn btn-danger btn-sm' type='submit' onClick = { () => this.props.handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

