import {Link} from 'react-router-dom'
import './index.css'

const ProductItem=(props)=>{
    const {productDetails}=props
    const{title,image,id}=productDetails
    

    return(
        <Link to={`/product-details/${id}`}><li className='product-card'>
            <img src={image} className='product-img' alt={title} />
        </li></Link>
    )
}
export default ProductItem;