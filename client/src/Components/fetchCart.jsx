import { useEffect } from "react"


function FetchCart(){


    useEffect(()=>{
        
            fetch(`https://fakestoreapi.com/carts/${sessionStorage.getItem("id")}`)
            .then(response => response.json())
            .then(data => sessionStorage.setItem("array",JSON.stringify(data.products)));

    },[])
}

export default FetchCart
