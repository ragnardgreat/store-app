import { FetchProducts } from "./Products";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import toFixed from "./ToFixed";


export default function PopularProducts() {

    const data = FetchProducts();


    const ads = data.map(product => <>
        <Link to={`/estore/${product.id}`} className="popularProduct"><img id="popularProduct" src={product.image} alt=""></img><h1 key={product.id} id="popularProductName">{product.title}</h1> <h2 id="popularPrice">${toFixed(product.price)}</h2></Link>
    </>);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (<>
        <div id="verticalAds">
            {shuffle(ads).slice(0, 4)}
        </div></>)

}