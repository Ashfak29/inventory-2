import React from 'react';
import './SideBar.css'
import {NavLink} from "react-router-dom";

const SideBar = () => {
    const handleShow = () => {
        let element = document.getElementById("navbarNav");
        element.classList.toggle("sidebar-tgl");
    }

    const handleLogout = () => {
      localStorage.removeItem('user')
        window.location.href = window.location.origin+'/login'
    }

    return (
        <div>
            <div className='d-block d-sm-none' onClick={handleShow}>
                <i className="fa-solid fa-bars-staggered"></i>
            </div>
            <div className="sidebar sidebar-tgl d-sm-block" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleShow}>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="inventory">Inventory</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="order">Order Management</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="searchProduct">Product Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="invoice">Invoice</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-delivery">Add Delivery Media</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-customer">Add Customer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-investment">Add Investment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-category">Add Category</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-purchase-type">Add Purchase Type</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="add-expense">Add Expense</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to="expense-type">Add Expense Type</NavLink>
                    </li>
                </ul>

                <button className='log-out-btn' onClick={handleLogout}>Logout</button>


            </div>
        </div>
    );
};

export default SideBar;
