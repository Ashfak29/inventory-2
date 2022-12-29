import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import axios from "axios";
import Swal from "sweetalert2";

const OrderManagement = () => {
    const [deliveryAgent, setDeliveryAgent] = useState([]);
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState([]);
    console.log(input)
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
    const handleOrder = () => {
        axios.post(Constents.BASE_URL + '/order', input).then(res => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                toast: true,
                title:res.data.msg,
                showConfirmButton: false,
                timer: 3000
            })
            setInput({
                customer_name: '',
                phone : '',
                product_code: '',
                price: '',
                quantity : '',
                discount : '',
                address : '',
                area : '',
                delivery_media_id : '',
                weight : '',
                image : '',
            })
            setErrors([])
        })
            .catch(errors => {
            errors.response.status === 422 ? setErrors(errors.response.data.errors) : setErrors([])
        })
    }
    useEffect(() => {
        fetch(Constents.BASE_URL + '/delivery-media')
            .then((response) => response.json())
            .then((data) => setDeliveryAgent(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome</h1>
            <div className="add-product-form">
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Customer Name</label>
                            <input
                                type="text"
                                name='customer_name'
                                className="form-control"
                                value={input.customer_name}
                                onChange={handleInput}

                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.customer_name != undefined ? errors.customer_name[0] : null}</small>
                            </p>
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
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.phone != undefined ? errors.phone[0] : null}</small>
                            </p>
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
                            <label htmlFor="exampleInputEmail1" className="form-label">Quantity</label>
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
                            <label htmlFor="exampleInputPassword1" className="form-label">Discount</label>
                            <input
                                type="number"
                                name='discount'
                                className="form-control"
                                value={input.discount}
                                onChange={handleInput}
                            />
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.discount != undefined ? errors.discount[0] : null}</small>
                            </p>
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
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.address != undefined ? errors.address[0] : null}</small>
                            </p>
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
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.area != undefined ? errors.area[0] : null}</small>
                            </p>
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

                                <option>Delivery Agent</option>
                                {
                                    deliveryAgent.map(agent => <option value={agent.id}
                                                                       key={agent.id}>{agent.name}</option>)
                                }
                            </select>
                            <p className={'login-error-message'}><small
                                className={'text-danger'}>{errors.delivery_media_id != undefined ? errors.delivery_media_id[0] : null}</small>
                            </p>
                        </div>
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
                            <div className={'product'} onClick={uploadImage}>
                                <h2 style={input.image != undefined && input.image != '' ? {display: 'none'} : {display: 'block'}}>Upload
                                    Product</h2>
                                <img src={input.image} className={'img-fluid'} alt=""/>
                            </div>
                            <p className={'login-error-message text-center'}><small
                                className={'text-danger'}>{errors.image != undefined ? errors.image[0] : null}</small>
                            </p>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button onClick={handleOrder} type="button" className=" my-2 btn btn-primary">Create Order
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default OrderManagement;
