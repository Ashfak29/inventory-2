import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import axios from "axios";

const OrderManagement = () => {
    const [deliveryAgent,setDeliveryAgent]=useState([]);
    const [input ,setInput] = useState({});
    const [errors, setErrors] = useState([]);
    console.log(input)
    const handleInput =(e)=>{
        setInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
        console.log(input)
    }
    const handleImageUpload=(e)=>{
        let photo = e.target.files[0]
        let reader = new FileReader()
        reader.onloadend= ()=>{
            setInput(prevState => ({...prevState, [e.target.name]:reader.result}))
        }
        reader.readAsDataURL(photo)

    }
    const uploadImage = () => {
        document.getElementById('productImg').click()
    }
    const handleOrder = () => {
        axios.post(Constents.BASE_URL + '/order', input).then(res => {
            setErrors([])


        }).catch(errors => {
            errors.response.status === 422 ? setErrors(errors.response.data.errors) : setErrors([])
        })
    }
    // const handleOrder = () => {
    //             fetch(Constents.BASE_URL+'/order', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(input),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //         })
    //         .then(()=>{ setErrors([])})
    //         .catch(error => console.log(error))
    //     // e.target.reset();
    //
    // }
    useEffect(() => {
        fetch(Constents.BASE_URL+'/delivery-media')
            .then((response) => response.json())
            .then((data) => setDeliveryAgent(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="add-product-form">
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Coustomer Name</label>
                            <input
                                type="text"
                                name='customer_name'
                                className="form-control"
                                value={input.customer_name}
                                onChange={handleInput}

                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="number"
                                name='phone'
                                className="form-control"
                                value={input.phone}
                                onChange={handleInput}
                            />
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
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Quantity</label>
                            <input
                                type="number"
                                name='quantity'
                                className="form-control"
                                value={input.quantity}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Discount</label>
                            <input
                                type="number"
                                name='discount'
                                className="form-control"
                                value={input.discount}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                            <input
                                type="text"
                                name='address'
                                className="form-control"
                                value={input.address}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Area</label>
                            <input
                                type="text"
                                name='area'
                                className="form-control"
                                value={input.area}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            {/*<label htmlFor="delivery_agent" className="form-label">delivery</label>*/}
                            <select
                                className="form-select"
                                name="delivery_media_id"
                                aria-label="Default
                                select example"
                                value={input.delivery_media_id}
                                onChange={handleInput}
                            >

                                <option >Delivery Agent</option>
                                {
                                    deliveryAgent.map(agent => <option value={agent.id} key={agent.id}>{agent.name}</option>)
                                }
                            </select>
                        </div>
                        {/*<div className="col-md-6 mb-3">*/}
                        {/*    <select className="form-select" aria-label="Default select example">*/}
                        {/*        <option selected>Want to add more Product</option>*/}
                        {/*        <option value="1">Yes</option>*/}
                        {/*        <option value="2">No</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        {/*<div className=" col-md-6 mb-3">*/}
                        {/*    <input*/}
                        {/*        className="form-control"*/}
                        {/*        name='image'*/}
                        {/*        type="file"*/}
                        {/*        id="formFileMultiple" multiple*/}
                        {/*        onChange={handleImageUpload}*/}


                        {/*    />*/}
                        {/*</div>*/}
                        <div className="col-md-6 mb-3">
                            <input
                                type="number"
                                name='weight'
                                className="form-control"
                                placeholder='Weight'
                                value={input.weight}
                                onChange={handleInput}
                            />
                        </div>
                        <div className=" col-md-12 mb-3">
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
                        <button onClick={handleOrder}  type="button" className=" my-2 btn btn-primary">Create Order</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default OrderManagement;
