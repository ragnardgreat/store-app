import React, {useEffect, useState} from "react"

export function FetchProducts(){

        const [backendData, setBackendData] = useState([{}]);

        useEffect(()=>{
            fetch('https://fakestoreapi.com/products').then(respone => respone.json()).then(data => setBackendData(data))
        },[])

        return backendData;
   
}
