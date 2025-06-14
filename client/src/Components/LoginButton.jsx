import { Link } from "react-router-dom";



export function LoginButton(){


    if(sessionStorage.getItem("username")=== null){
        return(
            <Link className="navBtn" id="login" to="/login">Log in</Link>
        )
    }
    else{
        return(<>
        <Link className="navBtn" id="login" to={`profile/${sessionStorage.getItem("id")}`}>Profile</Link>
        </>)

    }

}
