import React, {Component} from 'react'

export default class CreateProduct extends Component {
    render () {
        const {product, handleChange, handleSubmit} = this.props
        return (
            <form onSubmit = {handleSubmit}>
                <label htmlFor = 'name'>Name:</label>
                <input className = 'form-control' name = 'name' type='text' value = {product.name} onChange = {handleChange}/>
            <br/>
            
            <label htmlFor = 'price'> Price: </label>
                <input className = 'form-control' name = 'price' type='text' value = {product.price} onChange = {handleChange}/>
            <br/>

            <label htmlFor = 'discount'> Discount Percentage: </label>
                <input className = 'form-control' name = 'discount' type='text' value = {product.value} onChange = {handleChange}/>
            <br/>

            <label htmlFor = 'availability'> Availability: </label>
                <select className = 'form-control' name = 'availability' value = {product.availability} onChange = {handleChange}>
                    <option value='instock'>instock</option>
                    <option value='backordered'>backordered</option>
                    <option value='discontinued'>discontinued</option>
                </select>
            <br/>

            <button className = 'btn btn-primary' type = 'submit' onClick = {handleSubmit}>Create</button>

            </form>
        ) 
    }
}