import React, { Component } from 'react'
import ProductDataService from '../service/ProductDataService'

class DeleteModalComponent extends Component{
    deleteProductClicked() {
        ProductDataService.deleteProduct(id)
    }
    render(){
        return (
            <div class="modal fade" id="delete-modal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Delete Product</h4>
                        <button type="button" class="close" data-dismiss="modal">x</button>
                    </div>

                    <div class="modal-body">
                        Delete the selected product?
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn btn-success" data-dismiss="modal">Cancel</button>
                        <button class="btn btn-danger" data-dismiss="modal" onClick={(this.deleteProductClicked)}>Delete</button> 
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModalComponent