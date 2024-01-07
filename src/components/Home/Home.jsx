import { useEffect,useContext, useState } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromAPi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    const {categories,setCategories,products,setProducts } = useContext(Context)
    useEffect(()=>{
        getCategories()
        getProducts()
    },[])

    const getCategories = () => {
        fetchDataFromAPi("/api/categories?populate=*")
        .then(res => {
            // console.log(res);
            setCategories(res)
        })
    }
    const getProducts = () => {
        fetchDataFromAPi("/api/products?populate=*")
        .then(res => {
            // console.log(res);
            setProducts(res)
        })
    }
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories = {categories}/>
                <Products products={products} headingText={"Popular Products"}/>
            </div>
        </div>
    </div>;
};

export default Home;
