import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";
import MyAcount from "./Pages/MyAcount";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import NavBar from "./Components/NavBar";
import Ordered from "./Pages/Ordered";
import ErrorPage from "./Pages/ErrorPage"
import PaymentValidate from "./Pages/PaymentValidate"
import PaymentMode from "./Components/PaymentMode";
import Order from "./Components/Order";
import WishList from "./Components/WishList"
import LimitedAccessRoute from "./Components/LimitedAccessRoute"
import Adresses from "./Components/Adresses";
import PersonInformation from "./Components/PersonInformation";
import AdressForm from "./Components/AdressForm";
import PaymentModeForm from "./Components/PaymentModeForm";
import Product from "./Pages/Product";
import AdminProducts from "./Pages/AdminProducts"


function App() {
  const {user}=useSelector((state)=>state)

  return (
    <>
    <NavBar />
      <Routes>
       <Route path="/" element={user.isConnected?<Home />:<Login />}></Route>
       <Route path="/register" element={user.isConnected?<Home />:<Register />}></Route>
        {user.isConnected && <Route element={<LimitedAccessRoute isConnected={user.isConnected}/>}>        
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/my-account" element={<MyAcount />}></Route>
          <Route path="/ordered" element={<Ordered />}></Route>
          <Route path="/product/:idProduct" element={<Product />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/adress" element={<Adresses />} exact></Route>
          <Route path="/adress/:idAdress" element={<AdressForm />}></Route>
          <Route path="/adressForm" element={<AdressForm />}></Route>
          <Route path="/payment-mode-form/:idPaymentMode" element={<PaymentModeForm />}></Route>
          <Route path="/payment-mode-form" element={<PaymentModeForm />}></Route>
          <Route path="/person-information" element={<PersonInformation />}></Route>
          <Route path="/payment-mode" element={<PaymentMode />}></Route>
          <Route path="/payment-validate" element = {<PaymentValidate/>}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>}
        {!user.isConnected && <Route path="*" element={<Login />}></Route>}
        {  user.isConnected && user.roles.some(role=>role.name=="ROLE_ADMIN") && <Route path="/admin/products" element={<AdminProducts/>}></Route> }
      </Routes>
    </>
  );
}

export default App;
