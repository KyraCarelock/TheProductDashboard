import React, { Component } from 'react';
import ProductDataService from '../service/ProductDataService'

class ProductListComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            Products: [],
            message:null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.updateProductClicked = this.updateProductClicked.bind(this)
        this.addProductClicked= this.addProductClicked.bind(this)
    }

    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        ProductDataService.retrieveAllProducts()
        .then(
            response => {
                console.log(response);
                this.setState({ Products: response.data })
            }
        )
    }
    deleteProductClicked() {
        ProductDataService.deleteProduct()
        .then(
            response => {
                this.setState({ message: `Delete of Product is Successful` })
                this.refreshProducts()
            }
        )
    }

    updateProductClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/${id}`)
    }
    addProductClicked() {
        this.props.history.push(`/-1`)
    }
    render() {
        return(
            <div className="container">
                <h3>Products</h3>
                {this.state.message && <div class= "alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category Id</th>
                                <th>Category Name</th>
                                <th>Full Price</th>
                                <th>Sale Price</th>
                                <th>Availability</th>
                                <th>Supplier Id</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Products.map(
                                    Products =>
                                    <tr key={Products.id}>
                                        <td>{Products.id}</td>
                                        <td>{Products.name}</td>
                                        <td>{Products.categoryId}</td>
                                        <td>{Products.categoryName}</td>
                                        <td>{Products.fullPrice}</td>
                                        <td>{Products.salePrice}</td>
                                        <td>{Products.availability}</td>
                                        <td>{Products.supplierId}</td>
                                        <td>{Products.supplier}</td>
                                        <td><button className="btn btn-success" onClick={() =>this.updateProductClicked(Products.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteProductClicked(Products.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>  
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addProductClicked}>Add</button>
                </div>
            </div>
        )
    }
}
export default ProductListComponent