import { useEffect, useContext } from "react";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import { fetchDataFromAPI } from "../../utils/api";
import "./Home.scss";
import { Context } from "../../utils/context";
const Home = () => {
    const { categories, setCategories, products, setProducts } =
        useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromAPI("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromAPI("/api/categories?populate=*").then((res) => {
            // console.log(res);
            setCategories(res);
        });
    };
    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Polular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
