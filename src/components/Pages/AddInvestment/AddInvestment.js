import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const AddInvestment = () => {
    const [addInvest,setAddInvest]=useState([]);
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
            .then(()=>{addInvestment()})
            .catch(error => console.log(error))
        e.target.reset();

    }
    const addInvestment=()=>{
        fetch(Constents.BASE_URL+'/investment')
            .then((response) => response.json())
            .then((data) => {
                setAddInvest(data)
            });
    }
    useEffect(() => {
        addInvestment();
    }, []);
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
                <div className='table-responsive'>
                    <table className="table text-center">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {addInvest.map((invest, index) => (
                            <tr key={index}>
                                <th scope="row">{invest.name}</th>
                                <th scope="row">{invest.amount}</th>
                                <th scope="row">{invest.created_at.slice(0,10)}</th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddInvestment;
