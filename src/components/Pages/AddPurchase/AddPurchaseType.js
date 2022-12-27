import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import Swal from "sweetalert2";

const AddPurchaseType = () => {
    const [addPurchase,setAddPurchase]=useState([]);
    const handlePurchaseName = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const PurchaseType = {
            name: name,
        }
        fetch(Constents.BASE_URL+'/purchase-type', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(PurchaseType),
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(()=>{addPurchaseType()})
            .then(()=>{  Swal.fire({
                position: 'top-end',
                icon: 'success',
                toast: true,
                title: 'Your Purchase Added Successfully',
                showConfirmButton: false,
                timer: 3000
            })})
            .catch(error => console.log(error))
        e.target.reset();

    }
    const addPurchaseType=()=>{
        fetch(Constents.BASE_URL+'/purchase-type')
            .then((response) => response.json())
            .then((data) => {
                setAddPurchase(data)
            });
    }
    useEffect(() => {
        addPurchaseType();
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome</h1>
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
                <div className='table-responsive'>
                    <table className="table ">
                        <thead>
                        <tr>
                            <th scope="col">Purchase Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {addPurchase.map((purchaseItem, index) => (
                            <tr key={index}>
                                <th scope="row">{purchaseItem.name}</th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddPurchaseType;
