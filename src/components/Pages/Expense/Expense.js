import React, {useEffect, useState} from 'react';

const Expense = () => {
    const [expenseType,setExpenseType]=useState([]);
    const handleExpense = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const amount = e.target.amount.value
        const expense_type_id = e.target.expense_type_id.value

        const Expense = {
            name: name,
            amount: amount,
            expense_type_id:expense_type_id
        }
        fetch('http://192.168.0.110:8000/api/expense', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Expense),
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(error => console.log(error))
        e.target.reset();

    }
    useEffect(() => {
        fetch('http://192.168.0.110:8000/api/expense-type')
            .then((response) => response.json())
            .then((data) => setExpenseType(data));

    }, []);
    return (
        <div>
            <div className='container'>
                <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
                <div className="add-product-form">
                    <form onSubmit={handleExpense}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Expense Name</label>
                                <input type="text" name='name' className="form-control" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Amount</label>
                                <input type="number" name='amount' className="form-control" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <select className="form-select" name='expense_type_id' aria-label="Default select example">
                                    <option selected>Expense Type</option>
                                    {
                                        expenseType.map(expense => <option value={expense.id} key={expense.id}>{expense.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button  type="submit" className=" my-2 btn btn-primary">Add Expense</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Expense;
