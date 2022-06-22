import { useParams } from "react-router-dom"
import "./ProductDetail.css"

import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"

export default function ProductDetail(props) {
    const {productId} = useParams(); 
    const product = props.products.filter((e) => e.id == productId)

    return(
        (productId <= props.products.length && productId > 0) ? 
        <div className="product-detail">
            <ProductView shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart} product={product[0]}/>
        </div> 
        :
        <NotFound/>
    )
}