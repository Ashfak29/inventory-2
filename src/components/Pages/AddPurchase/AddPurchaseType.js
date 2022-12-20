import React from 'react';

const AddPurchaseType = () => {
    const handlePurchaseName = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const PurchaseType = {
            name: name,
        }
        fetch('http://192.168.0.110:8000/api/purchase-type', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(PurchaseType),
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
                <form onSubmit={handlePurchaseName}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Add Purchase Type </label>
                            <input type="text" name='name' className="form-control"/>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button  type="submit" className=" my-2 btn btn-primary">Add Purchase Type</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddPurchaseType;
