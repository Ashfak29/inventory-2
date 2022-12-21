import React from 'react';
import Constents from "../../../Constents";

const AddCategory = () => {
    const handleCategoryName = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const CategoryName = {
            name: name,
        }
        fetch(Constents.BASE_URL+'/category', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CategoryName),
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
                <form onSubmit={handleCategoryName}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Category Name</label>
                            <input type="text" name='name' className="form-control"/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className=" my-2 btn btn-primary">Add Category</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCategory;
