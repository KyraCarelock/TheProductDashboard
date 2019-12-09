import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik' 
import ProductDataService from '../service/ProductDataService'

class ProductComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: '',
            categoryId: '',
            categoryName: '',
            fullPrice: '',
            salePrice: '',
            availability: '',
            supplierId: '',
            supplier: '',
        }
    }

    componentDidMount() {
        console.log(this.state.id)

    ProductDataService.retrieveProduct(this.state.id    )
        .then(response =>{  
            console.log(response.data)
            this.setState({
            id: response.data[0].id,
            name: response.data[0].name ,
            categoryId: response.data[0].categoryId ,
            categoryName: response.data[0].categoryName ,
            fullPrice: response.data[0].fullPrice ,
            salePrice: response.data[0].salePrice ,
            availability: response.data[0].availability ,
            supplierId: response.data[0].supplierId ,
            supplier: response.data[0].supplier
        })})
    }

    render() {
        let { supplier, supplierId, availability, salePrice, fullPrice, categoryName, categoryId, name, id } = this.state

        return (
            <div>
                <h3>Product</h3>
                <div className="container">
                    <Formik
                        initalValues={{id, name, categoryId, categoryName, fullPrice, salePrice, availability, supplierId, supplier}}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                        <div>{id}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" input={name} />
                                        <div>{name}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>CategoryId</label>
                                        <Field className="form-control" type="text" name="categoryId"/>
                                        <div>{categoryId}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>CategoryName</label>
                                        <Field className="form-control" type="text" name="categoryName"/>
                                        <div>{categoryName}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Full Price</label>
                                        <Field className="form-control" type="text" name="fullPrice"/>
                                        <div>{fullPrice}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Sale Price</label>
                                        <Field className="form-control" type="text" name="salePrice"/>
                                        <div>{salePrice}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Availability</label>
                                        <Field className="form-control" type="text" name="availability"/>
                                        <div>{availability}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>SupplierId</label>
                                        <Field className="form-control" type="text" name="supplierId"/>
                                        <div>{supplierId}</div>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Supplier</label>
                                        <Field className="form-control" type="text" name="supplier"/>
                                        <div>{supplier}</div>
                                    </fieldset>
                                    <button className="btn btn-success" type="Submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default ProductComponent