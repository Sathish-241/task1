import { useParams } from "react-router";
import './index.css';
import {useState, useEffect } from "react";


const ProductDetails=()=>{
    const {id}=useParams()
    const[state,setState]=useState({})

    useEffect(()=>{
        // const url='https://fakestoreapi.com/products/'
        const fetchData=async()=>{           
            const url=`https://fakestoreapi.com/products/${id}`
            const response=await fetch(url)
            const productDetails=await response.json()
            console.log(productDetails)
            setState({
                category:productDetails.category,
                title:productDetails.title,
                description:productDetails.description,
                rating:productDetails.rating.rate,
                count:productDetails.rating.count,
                price:productDetails.price,
                imageUrl:productDetails.image

            })

        }
        
        fetchData()
    },[id]);


    return(
        <div className="product-details-container">
            <h1 className="product-title">{state.title}</h1>
            <div className="wraper-container">
                <div className="product-description-container">
                    <h1 className="product-category"><span className="span-ele">Category:</span>{state.category}</h1>
                    <p className="product-description"><span className="span-ele">Description:</span>{state.description}</p>
                    <p className="product-rating"><span className="span-ele">Rating:</span>{state.rating}</p>
                    <p className="product-count"><span className="span-ele">Count:</span>{state.count}</p>
                </div>
                <div className="product-img-container">
                    <img src={state.imageUrl} alt={state.title} className="product-pic" />
                    <h1 className="product-price"><span className="span-ele price-ele">Price:</span> ${state.price}</h1>
                </div>
            </div>
            

        </div>
    )
}
export default ProductDetails

