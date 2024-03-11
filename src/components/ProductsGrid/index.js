import {Component} from 'react';
import ProductItem from '../ProductItem';
import './index.css';

class ProductsGrid extends Component{
    state={
        productsArray:[],
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts=async()=>{
        const url='https://fakestoreapi.com/products'
        const options={
            method:'GET'
        }
        const response=await fetch(url,options)
        const productsArray=await response.json()
        this.setState({
            productsArray
        })
    }

    render(){
        const{productsArray}=this.state
        return(
            <div className='app-container'>
                <h1 className='heading'>Products List</h1>

                <ul className='products-display-container'>
                    {
                        productsArray.map((eachItem)=>(
                            <ProductItem productDetails={eachItem} key={eachItem.id} />
                        ))
                    }
                </ul>

               

            </div>
        )
    }
}
export default ProductsGrid