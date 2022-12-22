import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const ExpenseType = () => {
    const [expenseType,setExpenseType]=useState([]);
    const handleExpenseName = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const expenseTypes = {
            name: name,
            }
        fetch(Constents.BASE_URL+'/expense-type', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(expenseTypes),
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(()=>{getExpense()})
            .catch(error => console.log(error))
        e.target.reset();

    }
    const getExpense=()=>{
        fetch(Constents.BASE_URL+'/expense-type')
            .then((response) => response.json())
            .then((data) => {
                setExpenseType(data)
            });
    }
    useEffect(() => {
        getExpense();
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="add-product-form">
                <form onSubmit={handleExpenseName}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Expense Type </label>
                            <input type="text" name='name' className="form-control" required/>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button  type="submit" className=" my-2 btn btn-primary">Add Expense Type</button>
                    </div>
                </form>
            </div>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        expenseType.map(expense => <tr value={expense.id} key={expense.id}><td>{expense.name}</td></tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseType;
