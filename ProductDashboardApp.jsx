import React, { Component } from 'react';
import ProductListComponent from './ProductListComponent';
import ProductComponent from './ProductComponent';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


class ProductDashboardApp extends Component{
    render() {
        return (
        <div>
            <Router>
            <h1>Product Dashboard Application</h1>
            <Switch>
                <Route path="/" exact component={ProductListComponent} />
                <Route path="/:id" exact component={ProductComponent} />
            </Switch>
            </Router>
        </div>
        )
    }
}

export default ProductDashboardApp