import "./SingleProduct.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import RelatedProduct from "./RelatedProducts/RelatedProducts"
import { useParams } from "react-router-dom";
import useFetch from "../../../src/hooks/useFetch"
import {FaCartPlus} from "react-icons/fa"
import { useState,useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1)
    const {id} = useParams()
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const {handleAddToCart} = useContext(Context)

    const increment = () => {
        setQuantity(prevState=>prevState+1)
    }
    const decrement = () => {
        setQuantity(prevState=>{
            if(prevState===1) return 1
            return prevState-1
        })
    }

    if(!data) return
    const product = data.data[0].attributes
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={
                        product.img.data[0].attributes.url
                        } alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8377;{product.price}</span>
                    <span className="desc">{product.desc}</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-button" onClick={()=>{
                            handleAddToCart(data.data[0],quantity);
                            setQuantity(1)

                        }} >
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span> {product.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF size={14}/>
                                <FaInstagram size={14}/>
                                <FaTwitter size={14}/>
                                <FaLinkedinIn size={14}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProduct productId={id} categoryId={product.categories.data[0].id}/>
        </div>
    </div>;
};

export default SingleProduct;
