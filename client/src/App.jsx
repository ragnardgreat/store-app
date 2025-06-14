import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/home";
import Estore from "./Pages/Estore";
import Customers from "./Pages/Customers";
import Layout from "./Layout";
import LoginComponent from "./Components/LoginComponent";
import ProductinfoPage from "./Components/ProductInfoPage";
import UserProfile from "./Components/UserProfile";


function App(){

          sessionStorage.setItem("cart", JSON.stringify([]));



    return(<>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital@0;1&display=swap');
</style>
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/estore" element={<Estore/>}/>
                    <Route path="/customers" element={<Customers/>}/>
                    <Route path ="/login" element={<LoginComponent/>}/>
                    <Route path ="/estore/:id" element={<ProductinfoPage/>}></Route>
                    <Route path="/profile/:id" element={<UserProfile/>}></Route>
                </Route>
            </Routes>
        </Router>
        </>
    )

}

export default App;