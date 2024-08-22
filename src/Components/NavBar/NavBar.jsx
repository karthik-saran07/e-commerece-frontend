import { Link } from 'react-router-dom';
import'./NavBar.css'
import { useSelector } from 'react-redux';

const NavBar = ()=>
{

    const data = useSelector((state)=>state.cartOperation.cart)

    return (
        <>
         <nav className="navbar">
            <div className="logo"><Link to="/">Croma</Link></div>
            <div className="nav-links">
                
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/checkout">Cart : {data.length}</Link>
                
            </div>
        </nav>
        </>
    )
}

export default NavBar;