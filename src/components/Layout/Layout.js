import React from 'react';
import {Outlet} from 'react-router-dom'
import SideBar from "../Shared/SideBar";

const Layout = () => {
    return (
        <div className='container-fluid  g-0 over'>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Layout;