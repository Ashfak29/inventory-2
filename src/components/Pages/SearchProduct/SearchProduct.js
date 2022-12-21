import React from 'react';

const SearchProduct = () => {
    return (
        <div>
            <h2 className='text-center'>Search Product</h2>
            <form className="d-flex w-75 m-auto" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <table className="table w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Code</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">shirt</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SearchProduct;
