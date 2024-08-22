import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./Redux/store";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import CheckOutCart from "./Checkout/CheckoutCart";


const App = ()=>
{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/checkout" element={<CheckOutCart/>}/>
        </Routes>
      </Router>
    </>  
  )
}

export default App;