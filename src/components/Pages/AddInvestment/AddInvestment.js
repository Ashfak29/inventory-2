import React, {useState} from 'react';
import Constents from "../../../Constents";

const AddInvestment = () => {
    const handleInvestment = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const amount = e.target.amount.value

        const Investment = {
            name: name,
            amount: amount
        }
        fetch(Constents.BASE_URL+'/investment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Investment),
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
                <form onSubmit={handleInvestment}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name='name' className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Amount</label>
                            <input type="number" name='amount' className="form-control"/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button  type="submit" className=" my-2 btn btn-primary">Add Investment</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddInvestment;
