import "./Cart.scss";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../utils/context";

import {loadStripe} from "@stripe/stripe-js"
import { makePaymentrequest } from "../../utils/api";

const Cart = ({setShowCart}) => {

    const {cartItems,cartSubTotal} = useContext(Context)
    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY 
    )

    const handlePayment = async () => {

        try{
            const stripe = await stripePromise;
            const res = await makePaymentrequest.post("/api/orders",{
                products:cartItems
            })
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })

        }catch(error){
            console.log(error);
        }
    }


    return <div className="cart-panel">
        <div className="opec-layer">hello</div>
        <div className="cart-content">
            <div className="cart-header">
                <div className="heading">Shopping Cart</div>
                <span className="close-btn" onClick={()=>{setShowCart(false)}}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            {!cartItems.length && <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart.</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div>}
            {!!cartItems && 
            <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout-cta" onClick={handlePayment}>checkout</button>
                </div>
            </div>
        </>
            }
        </div>
    </div>;
};

export default Cart;
