import React, {useState} from 'react';
import Constents from "../../../Constents";

const AddDeliveryMedia = () => {

    const handleDeliveryMedia = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const contact = e.target.contact.value

        const AddDelivery = {
            name: name,
            contact: contact
        }
        fetch(Constents.BASE_URL+'/delivery-media', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddDelivery),
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(error => console.log(error))
        e.target.reset();

    }
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="add-product-form">
                <form onSubmit={handleDeliveryMedia}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Contact</label>
                            <input type="number" name='contact' className="form-control" required/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button  type="submit" className=" my-2 btn btn-primary">Add Delivery Media</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDeliveryMedia;
