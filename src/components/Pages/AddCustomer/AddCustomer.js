import React from 'react';
import Constents from "../../../Constents";

const AddCustomer = () => {
    const handleCustomer = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const phone = e.target.phone.value
        const mail = e.target.mail.value
        const address = e.target.address.value

        const CustomerAdd = {
            name: name,
            phone: phone,
            mail: mail,
            address: address
        }
        fetch(Constents.BASE_URL+'/customer', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CustomerAdd),
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
                <form onSubmit={handleCustomer}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" name='phone' className="form-control" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name='mail' className="form-control" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label  className="form-label">Address</label>
                            <input type="text" name='address' className="form-control" required/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button  type="submit" className=" my-2 btn btn-primary">Add Customer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;
