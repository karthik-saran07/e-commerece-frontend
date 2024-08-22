import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Redux/Slices/cartCounter'

const Product = ({productData}) =>
    {
        const cartCount = useSelector((state)=>state.cartOperation.cart.length)
        const cart = useSelector((state)=>state.cartOperation.cart)
        const dispatch = useDispatch();

        const handleAddCart = ()=>{
            if(!cart.some((ele)=>ele.id===productData.id)){
                dispatch(addToCart(productData));
            }   
        }


        return (
            <>           
            <div className="product-card">
                <h2 className="product-title">{productData.title}</h2>
                <img src={productData.image}/>
                <p className="product-description">{productData.description}</p>
                <p className="product-category">{productData.category}</p>
                <p className="product-price">${productData.price}</p>
                <p className="product-rating">Rating : {productData.rating.rate} Reviews : {productData.rating.count}</p>
                <div className='product-button'>
                    <button className="product-cart" onClick={handleAddCart}>Add to cart</button>
                </div>
    
            </div>
            </>
        )
    }
    
    export default Product