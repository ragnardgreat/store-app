import FetchCart from "./fetchCart";
import AddToTotal from "./AddToTotal";

function ShoppingCart() {

    let items;


    if (sessionStorage.getItem("id") != null) {
        FetchCart();

    }
    else if (sessionStorage.getItem("id") === null) {
        items = null;
    }


    //Function to show and hide the shopping cart
    let show = true;
    function showHideCart() {
        let cart = document.getElementById("cart");
        let cartItems = document.getElementById("items");

        if (show) {
            cart.classList.add("cartIn")
            cart.classList.remove("cartOut")
            cart.style.right = 0;
            cartItems.innerHTML = "";
            show = false;
        }
        else {
            cart.classList.add("cartOut");
            cart.classList.remove("cartIn");
            cart.style.right = "-1500px";
            cartItems.innerHTML = "";
            show = true;

        }
    }

    //Fetch data of the products which are in the cart from the api
    function fetchProductData(callback) {
        let key = 0;
        let cartItems = document.getElementById("items");
        items = JSON.parse(sessionStorage.getItem("array"));

        items.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then(response => response.json())
            .then(data => {
                AddToTotal(data.price);
                cartItems.innerHTML += `<li id="itemsInCart" key=${key}> 
                                        <img src=${data.image}></img>${data.title}
                                        <h1 id="cartPrice"><br></br>$${data.price.toFixed(2)}</h1>
                                        </li>`;
                key++;
            }));
        setTimeout(() => {
            callback();

        }, 500);
    }

    function getTotal() {
        let total = document.getElementById("total");
        console.log(sessionStorage.getItem("total"))
        if (sessionStorage.getItem("total") === null || sessionStorage.getItem("total") === "0") {
            total.innerHTML = ``
        }
        else {
            total.innerHTML = `Total: $${sessionStorage.getItem("total")}`
        }
    }


    function displayGuestCart(callback) {
        let key = 0;
        let cartItems = document.getElementById("items");
        items = JSON.parse(sessionStorage.getItem("cart"));

        items.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then(response => response.json())
            .then(data => {
                AddToTotal(data.price);
                cartItems.innerHTML += `<li id="itemsInCart" key=${key}>
                                                               <img src=${data.image}></img>
                                                               <div>${data.title}</div>
                                                               <h1 id="cartPrice"><br></br>$${data.price.toFixed(2)}</h1>
                                                               </li>`;
                key++;
            }));
        setTimeout(() => {
            callback();

        }, 500);

    }




    //A check to see if user is logged in
    if (sessionStorage.getItem("id") === null) {
        return (<>
            <button className="navBtn" id="cartBtn" onClick={() => { (displayGuestCart(getTotal)); showHideCart(); document.getElementById("cartBtn").classList.add("hidden"); document.getElementById("cartBtn").disabled = true }}>🛒</button>
            <div id="cart">
                <h1 id="cartTxt">Cart
                    <button onClick={() => { showHideCart(); sessionStorage.setItem("total", 0); document.getElementById("cartBtn").classList.remove("hidden"); document.getElementById("cartBtn").disabled = false }}>→</button>
                </h1>
                <ul id="items">
                </ul><br></br>
                <div id="total"></div>
            </div>

        </>);
    }

    return (<>
        <button className="navBtn" id="cartBtn" onClick={() => { (fetchProductData(getTotal)); showHideCart(); document.getElementById("cartBtn").classList.add("hidden"); document.getElementById("cartBtn").disabled = true }}>🛒</button>
        <div id="cart">
            <h1 id="cartTxt">Cart<button onClick={() => { showHideCart(); sessionStorage.setItem("total", 0); document.getElementById("cartBtn").classList.remove("hidden"); document.getElementById("cartBtn").disabled = false }}>→</button></h1>
            <ul id="items">
            </ul>
            <div id="total"></div>
        </div>

    </>)




}

export default ShoppingCart