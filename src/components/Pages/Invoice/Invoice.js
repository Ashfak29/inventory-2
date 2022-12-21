import React from 'react';

const Invoice = () => {
    return (
        <div>
            <h2 className='text-center'>Invoice</h2>
            <table className="table w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">Order No</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Area</th>
                    <th scope="col">Product Code</th>
                    <th scope="col">Price</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <img src="" alt="image"/>
                    </td>
                    <td>
                        <button>
                            Pending
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Invoice;
