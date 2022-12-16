import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions.js";
import axios from "axios";
import "./productlist.css";
import { Link } from "react-router-dom";

function ProductListing() {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  // console.log(products);
  const getProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProduct();
  }, []);
  // console.log(products);
  return (
    <div className="flex flex-wrap gap-8 w-[100%]">
      {products.map((item) => (
        <div key={item.id} className="product_box flex flex-col">
          <Link to={`/productdetails/${item.id}`}>
            <img className="product_image flex-none" src={item.image} />
            <hr />
            <div className="des flex-1">
              <div className="mt-auto">
                <h2 className="text-2xl text-left">{item.title}</h2>
                <br />
                <h1 className="text-4xl text-left">Price: {item.price}</h1>
                <br />
                <p className="text-sm text-left">{item.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
