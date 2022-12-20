import React from 'react';
import './SideBar.css'
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <div className="sidebar">
                <Link className="active" to="/">Dashboard</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="order">Order Management</Link>
                <Link to="searchProduct">Product Search</Link>
                <Link to="invoice">Invoice</Link>
                <Link to="add-delivery">Add Delivery Media</Link>
                <Link to="add-customer">Add Customer</Link>
                <Link to="add-investment">Add Investment</Link>
                <Link to="add-category">Add Category</Link>
                <Link to="add-purchase-type">Add Purchase Type</Link>
                <Link to="add-expense">Add Expense</Link>
                <Link to="expense-type">Add Expense Type</Link>
            </div>
        </div>
    );
};

export default SideBar;
