import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./routers/CustomerRoutes";

function App() {
  return (
    <div className="">

    <Routes>
     <Route path="/*" element={<CustomerRoutes/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
