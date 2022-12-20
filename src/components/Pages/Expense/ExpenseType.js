import React, {useEffect, useState} from 'react';

const ExpenseType = () => {
    const [expenseType,setExpenseType]=useState([]);
    // const [current, setCurrent] = useState(false);
    const handleExpenseName = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const expenseType = {
            name: name,
        }
        fetch('http://192.168.0.110:8000/api/expense-type', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(expenseType),
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
            .then((data) => {
                // setCurrent(!current)
                setExpenseType(data)
                });

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
