import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import '../Inventory/Inventory.css'
import axios from "axios";


const Inventory = () => {
    const [categorys, setCategory] = useState([]);
    const [purchaseType, setpurchaseType] = useState([]);
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState([]);


    const handleInput = (e) => {
        setInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
        console.log(input)
    }

    const handleImageUpload = (e) => {
        let photo = e.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setInput(prevState => ({...prevState, [e.target.name]: reader.result}))
        }
        reader.readAsDataURL(photo)

    }

    const uploadImage = () => {
        document.getElementById('productImg').click()
    }
    const handleSubmit = () => {
        axios.post(Constents.BASE_URL + '/product', input).then(res => {
            setErrors([])


        }).catch(errors => {
            errors.response.status === 422 ? setErrors(errors.response.data.errors) : setErrors([])
        })
        //  fetch(Constents.BASE_URL+'/product', {
        //         method: "POST",
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //      body: JSON.stringify(input),
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //         })
        //         .catch(error => console.log(error))
        //     // // e.target.reset();
        // }
    }
    useEffect(() => {
        fetch(Constents.BASE_URL + '/category')
            .then((response) => response.json())
            .then((data) => setCategory(data));
        fetch(Constents.BASE_URL + '/purchase-type')
            .then((response) => response.json())
            .then((data) => setpurchaseType(data));
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="add-product-form">
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control"
                                value={input.name}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.name != undefined ? errors.name[0] : null}</small></p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Product Code</label>
                            <input
                                type="text"
                                name='product_code'
                                className="form-control"
                                value={input.product_code}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.product_code != undefined ? errors.product_code[0] : null}</small>
                            </p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                name='price'
                                className="form-control"
                                value={input.price}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.price != undefined ? errors.price[0] : null}</small>
                            </p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Supplier Name</label>
                            <input
                                type="text"
                                name='supplier'
                                className="form-control"
                                value={input.supplier}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.supplier != undefined ? errors.supplier[0] : null}</small>
                            </p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                                type="number"
                                name='quantity'
                                className="form-control"
                                value={input.quantity}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.quantity != undefined ? errors.quantity[0] : null}</small>
                            </p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select"
                                name='category_id'
                                value={input.category_id}
                                onChange={handleInput}
                            >
                                <option>Select Category</option>
                                {
                                    categorys.map(cat => <option value={cat.id} key={cat.id}>{cat.name}</option>)
                                }
                            </select>
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.category_id != undefined ? errors.category_id[0] : null}</small>
                            </p>

                        </div>
                        <div className="col-md-6 mb-3">
                            <select
                                className="form-select"
                                name='purchase_type_id'
                                value={input.purchase_type_id}
                                onChange={handleInput}
                            >
                                <option>Purchase Type</option>
                                {
                                    purchaseType.map(purchase => <option value={purchase.id}
                                                                         key={purchase.id}>{purchase.name}</option>)
                                }
                            </select>
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.purchase_type_id != undefined ? errors.purchase_type_id[0] : null}</small>
                            </p>

                        </div>
                        <div className=" col-md-6 mb-3">
                            <input
                                type='file'
                                className=" d-none form-control"
                                id={'productImg'}
                                name="image"
                                onChange={handleImageUpload}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.image != undefined ? errors.image[0] : null}</small>
                            </p>

                            <div className={'product'} onClick={uploadImage}>
                                <h2 style={input.image != undefined && input.image != '' ? {display: 'none'} : {display: 'block'}}>Upload
                                    Product</h2>
                                <img src={input.image} className={'img-fluid'} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="button" className=" my-2 btn btn-primary" onClick={handleSubmit}>Add Product</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Inventory;

