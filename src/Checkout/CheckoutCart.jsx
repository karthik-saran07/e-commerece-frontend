import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import './CheckOutCart.css'
import { addToCart, clearCart, decrementCart, incrementCart, removeCart } from "../Redux/Slices/cartCounter";

const CheckOutCart = () => {
    const nav = useNavigate();
    const cart = useSelector((state) => state.cartOperation.cart);
    const dispatch = useDispatch();

    const handleInc = (item) => {
        dispatch(incrementCart(item));
    };

    const handleDecre = (item) => {
        dispatch(decrementCart(item));
    };

    const removeItem = (item) => {
        dispatch(removeCart(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleTotalCost = () => {
        let totalCost = 0;
        cart.forEach(element => {
            totalCost += element.price * element.quantity;
        });
        return totalCost;
    };

    return (
        <>
            <NavBar />
            <h1 style={{ marginTop: "90px", marginLeft: "515px" }}>Shopping Cart</h1>
            <div className="cart-page">
                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <h2>Your cart is empty !!</h2>
                        <button onClick={() => nav("/")}><p>+</p></button>
                    </div>
                ) : (
                    <>
                        <div className="cart-product-names">
                            <p className="product">Product</p>
                            <p className="price">Price</p>
                            <p className="quantity">Quantity</p>
                            <p className="total">Total</p>
                        </div>
                        <div className="cart-items">
                            {cart.map(item => (
                                <>
                                    <hr />
                                    <br />
                                    <div className="cart-full-box">
                                        <div className="cart-item-box">
                                            <img className="item-image" src={item.image} alt={item.title} />
                                            <div className="item-info">
                                                <p>{item.title}</p>
                                                <p>{item.category}</p>
                                                <button onClick={() => removeItem(item)}>Remove item</button>
                                            </div>
                                        </div>

                                        <div className="cart-item-price">
                                            <p>${item.price}</p>
                                        </div>

                                        <div className="cart-item-quantity">
                                            <button className="minus" onClick={() => handleDecre(item)}>-</button>
                                            <p>{item.quantity}</p>
                                            <button className="plus" onClick={() => handleInc(item)}>+</button>
                                        </div>

                                        <div className="cart-item-total">
                                            <p>${Math.ceil(item.price * item.quantity)} ( x{item.quantity} )</p>
                                        </div>
                                    </div>
                                    <br />
                                </>
                            ))}
                        </div>
                        <hr />
                        <div className="checkout-full-box">
                            <div className="checkout-box-clearCart">
                                <button onClick={handleClearCart}>Clear cart</button>
                            </div>
                            <div className="checkout-box-subTotal">
                                <p>Subtotal : ${Math.ceil(handleTotalCost())} </p>
                                <button onClick={() => nav("/")}>Continue Shopping</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CheckOutCart;
