import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import Swal from "sweetalert2";

const Expense = () => {
    const [expenseType,setExpenseType]=useState([]);
    const [addExpense,setAddExpense]=useState([]);
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
        fetch(Constents.BASE_URL+'/expense', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Expense),
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(()=>{addExpenseApi()})
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    toast: true,
                    title: 'Your Expense Create Successfully',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
            .catch(error => console.log(error))
        e.target.reset();

    }
    const addExpenseApi=()=>{
        fetch(Constents.BASE_URL+'/expense-type')
            .then((response) => response.json())
            .then((data) => setExpenseType(data));
        fetch(Constents.BASE_URL+'/expense')
            .then((response) => response.json())
            .then((data) => setAddExpense(data));

    }
    useEffect(() => {
        addExpenseApi();
    }, []);
    return (
        <div>
            <div className='container'>
                <h1 className='text-center py-2'>Welcome</h1>
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
                    <div className=' table-responsive'>
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col">Expense Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Expense Type</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {addExpense.map((expenseItem, index) => (
                                <tr key={index}>
                                    <th scope="row">{expenseItem.name}</th>
                                    <td>{expenseItem.amount}</td>
                                    <td>{expenseItem.expense_type.name}</td>
                                    <td>{expenseItem.created_at.slice(0,10)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expense;
