import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const AddCustomer = () => {
     const [addCustomer,setAddCustomer]=useState([]);
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
            .then(()=>{addCustomers()})
            .catch(error => console.log(error))
        e.target.reset();
    }
    const addCustomers=()=>{
        fetch(Constents.BASE_URL+'/customer')
            .then((response) => response.json())
            .then((data) => {
                setAddCustomer(data)
            });
    }
    useEffect(() => {
        addCustomers();
    }, []);
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
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addCustomer.map((customer, index) => (
                        <tr key={index}>
                            <th scope="row">{customer.name}</th>
                            <th scope="row">{customer.phone}</th>
                            <th scope="row">{customer.mail}</th>
                            <th scope="row">{customer.address}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddCustomer;
