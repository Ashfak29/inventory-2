import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const SearchProduct = () => {
    const [searchData,setSearchData]=useState([])
    const [search,setSearch]=useState('')
    const handleInput=(e)=>{
        setSearch(e.target.value)
    }
    const getSearchData = () => {
        fetch(Constents.BASE_URL+'/chalan/'+search)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setSearchData(data)
            });
    }

  return (
        <div>
            <h2 className='text-center'>Search Product</h2>
            <form className="d-flex w-75 m-auto">
                <input
                    className="form-control me-2"
                    type="search"
                    name='product_code'
                    placeholder="Input Your Product Code"
                    onChange={handleInput}

                />
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        onClick={getSearchData}
                    >
                        Search
                    </button>
            </form>
            <div className="row pt-5 align-items-center">
                <div className="col-md-8 px-4">
                    <h3 className='text-center'>Product Purchase</h3>
                    <p>Product Name:{searchData.productName}</p>
                    <p>Product Code:{searchData.productCode}</p>
                    <p>Per Product Price:{searchData.perProductPrice}</p>
                    <p>Total Purchasing Price:{searchData.purchasingPrice}</p>
                    <p>Total Quantity:{searchData.totalQuantity}</p>
                    <hr/>
                    <h3 className='text-center'>Product Sold</h3>
                    <p>Sold Amount:{searchData.soldPrice}</p>
                    <p>Sold Quantity:{searchData.soldQuantity}</p>
                    <p>Rest Quantity:{searchData.restQuantity}</p>
                    <p>Delivered Product:{searchData.deliveredProduct}</p>
                    <p>Pending Product:{searchData.pendingProduct}</p>
                    <p>Shipping Product:{searchData.shippingProduct}</p>
                    <p>Discount:{searchData.discount}</p>


                    {
                        searchData.chalan > 0 ? (searchData.restQuantity ==0 ? <p>You are in loss :{searchData.chalan} taka.</p>
                                :<p>You need to sell more :{searchData.chalan} taka to gain the chalan.</p>)
                            : <p>Your Chalan has been earned and Profit :{Math.abs(searchData.chalan)} taka</p>
                    }
                </div>
                <div className="col-md-4 text-center">
                    <img className={'img-fluid product-img'} src={searchData.image}/>
                </div>
            </div>
        </div>
    );
};

export default SearchProduct;
