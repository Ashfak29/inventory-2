import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";
import '../Invoice/Invoice.css'

const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState([])
    useEffect(() => {
        fetch(Constents.BASE_URL + '/invoice')
            .then((response) => response.json())
            .then((data) => {
                setInvoiceData(data.data)
            });
    }, []);
    console.log('hello')
    console.log(invoiceData)
    console.log('hello mama')
    return (
        <div>
            <h2 className='text-center'>Invoice</h2>

            <table className="table  m-auto ">
                <thead>
                <tr>
                    <th scope="col">Order No</th>
                    <th scope="col">Customer Name</th>
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
                </tr>
                </thead>
                <tbody>

                {invoiceData.map((invoiceItem, index) => (
                    <tr key={index}>
                        <th scope="row">{invoiceItem.id}</th>
                        <td>{invoiceItem.customer_name}</td>
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
                            <button>Pending</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Invoice;
