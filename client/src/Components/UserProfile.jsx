import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LogOut from "./LogOut";

function UserProfile() {
    const { id } = useParams();
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUserData(data));
    }, [])

    return (<>
        <div id="userInfo">
            <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"></img>
            <span id="userName">
                <h1>{`Username: ${userData.username}`}</h1>
                <h1>{`Email: ${userData.email}`}</h1>
                <button id="logOut" onClick={()=>{LogOut()}}>Log out</button>
            </span>
        </div>

    </>)
}

export default UserProfile