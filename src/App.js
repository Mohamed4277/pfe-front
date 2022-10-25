import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MyAcount from "./Pages/MyAcount";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import NavBar from "./Components/NavBar";
import Ordered from "./Pages/Ordered";

function App() {
  const hasToken=localStorage.getItem("access_token") && localStorage.getItem("access_token").length > 0
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/my-account" element={<MyAcount />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ordered" element={<Ordered />}></Route>
      </Routes>
    </>
  );
}

export default App;
