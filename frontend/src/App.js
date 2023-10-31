import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Pages/Login/Login";
import Signup from "./Pages//Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import VetAppointment from "./Pages/VetAppointment";
import Main from "./Pages/Main";
import Product from "./Pages/Product";
import HealthCare from "./Pages/HealthCare";
import Cart from "./Pages/Cart";
import DeliveryAdd from "./Pages/Proceedtobuy/deliveryadd";
import Payment from "./Pages/Proceedtobuy/payment";
import Bill from "./Pages/Proceedtobuy/bill";
import Ordered from "./Pages/Proceedtobuy/ordered";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleProductDelete = (productId) => {
 
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard counter={counter} />}>
          <Route path="main" element={<Main />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="health"  element={
              <HealthCare
                incrementCounter={incrementCounter}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />} />
          <Route
            path="product"
            element={
              <Product
                incrementCounter={incrementCounter}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                selectedProducts={selectedProducts}
                onProductDelete={handleProductDelete}
              />
            }
          />
           <Route path="deliveryadd" element={<DeliveryAdd />} />
           <Route path="payment" element={<Payment selectedProducts={selectedProducts}/>} />
           <Route path="bill" element={<Bill />} />
           <Route path="ordered" element={<Ordered />} />
          <Route path="vetappointment" element={<VetAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
