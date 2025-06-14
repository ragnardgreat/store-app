import { Link } from "react-router-dom";
import PopularProducts from "../Components/PopularProducts";

function Homepage() {


    return (
        <>
            <div className="homeElements">
                <h1 id="popular">Popular Products</h1>
                <PopularProducts />
            </div>
        </>
    )
}

export default Homepage