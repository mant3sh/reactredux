import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productdetail.css";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions.js";

function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  // const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);
  const getdetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") getdetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="w-[100%] h-[90vh]">
      {/* <div className="flex flex-row h-[100%] gap-6">
        <img className="detail_img flex-1 p-4" src={image} alt={title} />
        <div className="flex-1 text-left p-4">
          <h1 className="text-4xl font-bold">{category}</h1>
          <br />

          <h1 className="text-4xl font-bold">{title}</h1>
          <br />
          <h1 className="text-4xl font-bold">price: {price}</h1>
          <br />
          <p>{description}</p>
        </div>
      </div> */}
    </div>
  );
}

export default ProductDetails;
