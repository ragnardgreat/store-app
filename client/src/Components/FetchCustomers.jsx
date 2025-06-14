import  {useEffect, useState} from "react"

function FetchCustomers(){
    const [backendData, setBackendData] = useState([{}]);

    useEffect(()=>{fetch('https://fakestoreapi.com/users').then(respone => respone.json()).then(data => setBackendData(data))},[]);

    const customers = backendData;

    const customersList = customers.map(customer => <div className="customer" key={customer.id}>
                                                    <img src="https://i.postimg.cc/J4PCGnQC/images-3.jpg" id="userLogo" alt=""></img>
                                                    Username: {customer.username}<br></br>
                                                    Email: {customer.email}<br></br>
                                                    Password: {customer.password}</div>);


      if(customers.length === 1){
                return (
            <>
                <h1 id="loading">Loading...</h1>
            </>
        )
      } 

    return(
        <>
        <div>{customersList}</div>
        </>
    )

}

export default FetchCustomers