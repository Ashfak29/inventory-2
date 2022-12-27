import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import '../Invoice/Invoice.css'

const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState([])

    const handleDelete = (id) => {
        fetch(Constents.BASE_URL + '/order/' + id, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(() => {
                getOrderData()
            })
            .catch(error => console.log(error))
    }

    const handleReturn = (id) => {
        fetch(Constents.BASE_URL + '/order-return/' + id, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(() => {
                getOrderData()
            })
            .catch(error => console.log(error))
        document.getElementById('cancel').style.display = 'none'
    }

    const handleStatus = (id) => {
        fetch(Constents.BASE_URL + '/order/' + id, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
            })
            .then(() => {
                getOrderData()
            })
            .catch(error => console.log(error))
    }

    const getOrderData = () => {
        fetch(Constents.BASE_URL + '/invoice')
            .then((response) => response.json())
            .then((data) => {
                setInvoiceData(data.data)
            });
    }
    useEffect(() => {
        getOrderData();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Invoice</h2>
            <div className='table-responsive'>
                <table className="table  m-auto table-bordered text-center " id='cssTable'>
                    <thead>
                    <tr>
                        <th scope="col">Order No</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Area</th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Delivery</th>
                        <th scope="col">Image</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {invoiceData.map((invoiceItem, index) => (
                        <tr key={index}>
                            <th scope="row">{invoiceItem.id}</th>
                            <td>{invoiceItem.customer_name}</td>
                            <td>{invoiceItem.date}</td>
                            <td>{invoiceItem.phone}</td>
                            <td>{invoiceItem.address}</td>
                            <td>{invoiceItem.area}</td>
                            <td>{invoiceItem.product_code}</td>
                            <td>{invoiceItem.price}</td>
                            <td>{invoiceItem.quantity}</td>
                            <td>{invoiceItem.weight}</td>
                            <td>{invoiceItem.delivery_media_id}</td>
                            <td>
                                <img className='invoice-img' src={invoiceItem.image} alt="invoiceImage"/>
                            </td>
                            <td>
                                {
                                    invoiceItem.status == 0 ?
                                        <button onClick={() => handleStatus(invoiceItem.id)} type={'button'} style={{
                                            background: 'yellow',
                                            color: 'red',
                                            border: 'none'
                                        }}>Pending</button>
                                        : (invoiceItem.status == 1 ?
                                                <button onClick={() => handleStatus(invoiceItem.id)} type={'button'}
                                                        style={{
                                                            background: 'skyblue',
                                                            color: 'white',
                                                            border: 'none'
                                                        }}>Shipping</button>
                                                : (invoiceItem.status == 2 ?
                                                        <button style={{
                                                            background: 'green',
                                                            color: 'white',
                                                            border: 'none'
                                                        }}>Delivered</button>
                                                        : <button style={{
                                                            background: 'deeppink',
                                                            color: 'white',
                                                            border: 'none',
                                                            display: 'none'
                                                        }}>Returned</button>
                                                )

                                        )
                                }
                            </td>
                            <td>
                                {
                                    invoiceItem.status == 2 ? <button style={{
                                            background: 'deeppink',
                                            color: 'white',
                                            border: 'none',
                                            display: 'none'
                                        }}>Returned</button>
                                        : (invoiceItem.status == 3 ? <button style={{
                                                background: 'deeppink',
                                                color: 'white',
                                                border: 'none'
                                            }}>Returned</button>
                                            : <>
                                                <button id={'cancel'}
                                                        style={{background: 'red', color: 'white', border: 'none'}}
                                                        type={'button'} onClick={() => handleDelete(invoiceItem.id)}>Cancel
                                                </button>
                                                <button style={{
                                                    background: '#8b8383',
                                                    color: 'white',
                                                    border: 'none',
                                                    marginTop: '5px'
                                                }} type={'button'} onClick={() => handleReturn(invoiceItem.id)}>Return
                                                </button>
                                            </>)

                                }
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoice;
