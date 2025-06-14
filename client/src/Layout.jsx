import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./Logo";


function Layout() {
    
        const style = {
            width:"120px",
            marginBottom:"-10px",
            padding:"0px"
        }
    return (

        <>
            <div id="pageTop">
               <Link id="titleLink" to="/"><Logo/></Link> 
                <Navbar />
            </div>

            <main>
                <Outlet />
            </main>
            <div id="legal">This page was made by Roland "roltzs" Piperal for demonstrative purposes only!</div>
        </>
    )
}

export default Layout