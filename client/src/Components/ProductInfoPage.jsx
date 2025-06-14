import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toFixed from "./ToFixed";

function ProductinfoPage() {

  const { id } = useParams();
  const [backendData, setBackendData] = useState([{}]);
  const product = backendData;
  const [item, setItem] = useState("");
  const cart = { userId: sessionStorage.getItem("id"), products: [{ productId: Number(id), quantity: 1 }] };

  function getCart() {
    fetch(`https://fakestoreapi.com/carts/${sessionStorage.getItem("id")}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart)
    })
      .then(response => response.json())
      .then(data => setItem(data.products[0]));
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then(respone => respone.json()).then(data => setBackendData(data)).then(() => {
      if (sessionStorage.getItem("id") != null) {
        getCart();
      }
    })
  }, []);

  function addToCart() {

    let array = JSON.parse(sessionStorage.getItem("array"));
    array.push(item);
    array = JSON.stringify(array);
    sessionStorage.setItem("array", array)
  }

  function guestCart(product) {
    const item = { productId: product.id, quantity: 1 };

    let gCart = JSON.parse(sessionStorage.getItem("cart"));
    gCart.push(item);
    gCart = JSON.stringify(gCart);
    sessionStorage.setItem("cart", gCart);
  }




  if (sessionStorage.getItem("username") === null) {
    return (
      <>
        <div id="productInfo">
          <img src={product.image} alt=""></img>

          <div id="productInfoText">
            <h1>{product.title}</h1>
            <h2 id="prodPrice">${toFixed(product.price)}</h2>
            <h1 >Description:<br></br></h1>
            <h2 >{product.description}</h2>
            <button onClick={() => { guestCart(product) }}>Buy</button>

          </div>

        </div>

      </>
    )
  }


  return (
    <>
      <div id="productInfo">
        <img src={product.image} alt=""></img>

        <div id="productInfoText">
          <h1>{product.title}</h1>
          <h2 id="prodPrice">${toFixed(product.price)}</h2>
          <h2>{product.description}</h2>
          <button onClick={() => { addToCart() }}>Buy</button>

        </div>

      </div>

    </>
  )
}

export default ProductinfoPage