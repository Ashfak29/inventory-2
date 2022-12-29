import Layout from "../Layout/Layout";
import {createBrowserRouter} from 'react-router-dom'
import Home from "../Pages/Home/Home";
import Inventory from "../Pages/Inventory/Inventory";
import OrderManagement from "../Pages/OrderManagement/OrderManagement";
import Expense from "../Pages/Expense/Expense";
import SearchProduct from "../Pages/SearchProduct/SearchProduct";
import Invoice from "../Pages/Invoice/Invoice";
import AddDeliveryMedia from "../Pages/AddDeliveryMedia/AddDeliveryMedia";
import AddCustomer from "../Pages/AddCustomer/AddCustomer";
import AddInvestment from "../Pages/AddInvestment/AddInvestment";
import AddCategory from "../Pages/AddCategory/AddCategory";
import ExpenseType from "../Pages/Expense/ExpenseType";
import AddPurchaseType from "../Pages/AddPurchase/AddPurchaseType";

const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>,

            },
            {
                path: '/order',
                element: <OrderManagement></OrderManagement>
            },
            {
                path: '/add-expense',
                element: <Expense></Expense>
            },
            {
                path: '/searchProduct',
                element: <SearchProduct></SearchProduct>
            },
            {
                path: '/invoice',
                element: <Invoice></Invoice>
            },
            {
                path: '/add-delivery',
                element: <AddDeliveryMedia></AddDeliveryMedia>
            },
            {
                path: '/add-customer',
                element: <AddCustomer></AddCustomer>
            },
            {
                path: '/add-investment',
                element: <AddInvestment></AddInvestment>
            },
            {
                path: '/add-category',
                element: <AddCategory></AddCategory>
            },
            {
                path: '/expense-type',
                element: <ExpenseType></ExpenseType>
            },

            {
                path: '/add-purchase-type',
               element: <AddPurchaseType></AddPurchaseType>
            },

        ]
    }
])
export default router
