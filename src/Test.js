import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import '../Inventory/Inventory.css'


const Test=()=> {
    const [categorys, setCategory] = useState([]);
    const [purchaseType, setpurchaseType] = useState([]);
    const [picture,setPicture] = useState('')
    let image = null
    const handleImageUpload=(e)=>{
        let photo = e.target.files[0]
        let reader = new FileReader()
        reader.onloadend= ()=>{
            image = reader.result
            setPicture(image)
            console.log(image,2)

        }
        console.log(image,1)
        reader.readAsDataURL(photo)
    }
    const uploadImage =()=>{
        document.getElementById('productImg').click()
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value
        const product_code = e.target.product_code.value
        const price = e.target.price.value
        const supplier = e.target.supplier.value
        const quantity = e.target.quantity.value
        const category_id = e.target.category_id.value
        const purchase_type_id = e.target.purchase_type_id.value

        const productSave = {
            name: name,
            product_code: product_code,
            price: price,
            supplier: supplier,
            quantity: quantity,
            category_id: category_id,
            purchase_type_id: purchase_type_id,
            image: image,

        }
        console.log(productSave)
        fetch(Constents.BASE_URL+'/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productSave),
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(error => console.log(error))
        // // e.target.reset();
    }

    useEffect(() => {
        fetch(Constents.BASE_URL+'/category')
            .then((response) => response.json())
            .then((data) => setCategory(data));
        fetch(Constents.BASE_URL+'/purchase-type')
            .then((response) => response.json())
            .then((data) => setpurchaseType(data));
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="add-product-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Product Code</label>
                            <input
                                type="text"
                                name='product_code'
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                name='price'
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Supplier Name</label>
                            <input
                                type="text"
                                name='supplier'
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                                type="number"
                                name='quantity'
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select"
                                name='category_id'
                            >
                                {
                                    categorys.map(cat => <option value={cat.id} key={cat.id}>{cat.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <select
                                className="form-select"
                                name='purchase_type_id'
                            >
                                {
                                    purchaseType.map(purchase => <option value={purchase.id}
                                                                         key={purchase.id}>{purchase.name}</option>)
                                }
                            </select>
                        </div>
                        <div className=" col-md-6 mb-3">
                            <input
                                type='file'
                                className=" d-none form-control"
                                id={'productImg'}
                                name="image"
                                onChange={handleImageUpload}
                            />

                            <div className={'product'} onClick={uploadImage}>
                                <h2  style={picture !=''?{display:'none'}:{display:'block'}}>Upload Product</h2>
                                <img src={picture} className={'img-fluid'} alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className=" my-2 btn btn-primary">Add Product</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Test;

