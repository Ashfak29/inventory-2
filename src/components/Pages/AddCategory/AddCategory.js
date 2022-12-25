import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const AddCategory = () => {
    const [addCategory,setAddCategory]=useState([]);
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
            .then(()=>{addCategories()})
            .catch(error => console.log(error))
        e.target.reset();
    }
    const addCategories=()=>{
        fetch(Constents.BASE_URL+'/category')
            .then((response) => response.json())
            .then((data) => {
                setAddCategory(data)
            });
    }
    useEffect(() => {
        addCategories();
    }, []);
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
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Category Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addCategory.map((categories, index) => (
                        <tr key={index}>
                            <th scope="row">{categories.name}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AddCategory;
