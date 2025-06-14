import { Link } from "react-router-dom"
import { LoginButton } from "./LoginButton"
import ShoppingCart from "./ShoppingCart"


function Navbar() {
    return (
        <>
            <div id="navbar">
                <Link className="navBtn" to="/">Home</Link>
                <Link className="navBtn" to="/estore">Estore</Link>
                <Link className="navBtn" to="/customers">Customers</Link>
                <LoginButton />
                <ShoppingCart/>
            </div>
        </>
    )
}

export default Navbar