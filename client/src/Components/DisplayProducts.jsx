import { Link } from "react-router-dom";
import { FetchProducts } from "./Products";
import toFixed from "./ToFixed";


function DisplayProducts() {



    const products = FetchProducts();

    const productsList = products.map(product => <>
        <Link to={`${product.id}`} className="product"><img id="eStoreImages" src={product.image} alt=""></img><h1 key={product.id} id="productName">{product.title}</h1> <h2 id="price">${toFixed(product.price)}</h2></Link>
    </>);

    if (products.length === 1) {
        return (
            <>
                <h1 id="loading">Loading...</h1>
            </>
        )
    }

    return (
        <>
            <div id="productList">
                {productsList}
            </div>
        </>
    )

}

export default DisplayProducts

