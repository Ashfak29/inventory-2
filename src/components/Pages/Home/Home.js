import React, {useEffect, useState} from 'react';
import Constents from "../../../Constents";

const Home = () => {
    const [dashboardData,setDashboardData]=useState([]);

    useEffect(() => {
        fetch(Constents.BASE_URL+'/dashboard')
            .then((response) => response.json())
            .then((data) => {
                setDashboardData(data)
            });
    }, []);
    return (
        <div>
            <h1 className='text-center py-2'>Welcome, Book Thorp</h1>
            <div className="container">
                <div className="summery-main">
                    <h2>Summery</h2>
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-database"></i></span>
                                <div className="summery-inner">
                                    <p> Total investment  </p>
                                    <p>Amount: {dashboardData.totalInvestment} Taka</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-store"></i></span>
                                <div className="summery-inner">
                                    <p> Product On Hand</p>
                                    <p>Amount: {dashboardData.productOnHandAmount} Taka</p>
                                    <p>Quantity: {dashboardData.productOnHandQuantity} Unit</p>

                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4 mb-3">*/}
                        {/*    <div className='summery-head'>*/}
                        {/*        <span className='pe-3'><i className="fa-solid fa-store"></i></span>*/}
                        {/*        <div className="summery-inner">*/}
                        {/*            <p> Product On Hand </p>*/}
                        {/*            <p>Amount: 2000000.00 Taka</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-truck"></i></span>
                                <div className="summery-inner">
                                    <p> Total Delivered </p>
                                    <p>Amount: {dashboardData.totalDeliveredAmount} Taka</p>
                                    <p>Quantity: {dashboardData.totalDelivered} Unit</p>

                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4 mb-3">*/}
                        {/*    <div className='summery-head'>*/}
                        {/*        <span className='pe-3'><i className="fa-solid fa-truck"></i></span>*/}
                        {/*        <div className="summery-inner">*/}
                        {/*            <p> Total Delivered</p>*/}
                        {/*            <p>Amount: 2000000.00 Taka</p>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-right-left"></i></span>
                                <div className="summery-inner">
                                    <p> Total Return</p>
                                    <p>Amount: {dashboardData.totalReturnAmount} Taka</p>
                                    <p>Quantity: {dashboardData.totalReturn} Unit</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4 mb-3">*/}
                        {/*    <div className='summery-head'>*/}
                        {/*        <span className='pe-3'><i className="fa-solid fa-right-left"></i></span>*/}
                        {/*        <div className="summery-inner">*/}
                        {/*            <p> Total Return</p>*/}
                        {/*            <p>Amount: 2000000.00 Taka</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-cart-flatbed"></i></span>
                                <div className="summery-inner">
                                    <p> Total Shipping</p>
                                    <p>Amount: {dashboardData.totalShippingAmount} Taka</p>
                                    <p>Quantity: {dashboardData.totalShipping} Unit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-hourglass-half"></i></span>
                                <div className="summery-inner">
                                    <p> Total Pending</p>
                                    <p>Amount: {dashboardData.totalPendingAmount} Taka</p>
                                    <p>Quantity: {dashboardData.totalPending} Unit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-cart-flatbed"></i></span>
                                <div className="summery-inner">
                                    <p> Advance Payment</p>
                                    <p>Amount: {dashboardData.advancePayment} Taka</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-hourglass-half"></i></span>
                                <div className="summery-inner">
                                    <p>Accounts Payable</p>
                                    <p>Amount: {dashboardData.accountsPayable} Taka</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className='summery-head'>
                                <span className='pe-3'><i className="fa-solid fa-right-from-bracket"></i></span>
                                <div className="summery-inner">
                                    <p> Total Expense</p>
                                    <p>Amount: {dashboardData.totalExpense} Taka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
