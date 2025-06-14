import { jwtDecode } from "jwt-decode";
import Logo from "../Logo";




function LoginComponent() {


    const isUser = (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const credentials = { username: formData.get("username"), password: formData.get("password") };

        if (formData.get("username") === "" || formData.get("password") === "") {
            return (
                <>
                    {alert("Enter username and password")}
                </>
            )
        }
        else {
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })
                .then(response => {
                    if (response.status === 401) {
                        return
                    }
                    else {
                        return response.json()
                    }
                })
                .then(data => {
                    if (data) {
                        let token = data.token;
                        sessionStorage.setItem("username", (jwtDecode(token).user));
                        sessionStorage.setItem("token", token);
                        sessionStorage.setItem("id", (jwtDecode(token).sub))
                        window.location.href = "/";
                        sessionStorage.setItem("login", true);
                    }
                    else {
                        alert("Incorrect password or username")
                    }


                });
        }


    }

    return (
        <>
            <form id="loginPage" onSubmit={isUser}>
                <h1>LOGIN</h1>
                <lable>Username:</lable>
                <input autoComplete="off" type="text" name="username"></input><br></br>
                <lable>Password:</lable>
                <input autoComplete="off" name="password"></input><br></br>
                <button id="loginBtn" type="submit" >Log In</button>
            </form>
        </>
    )

}

export default LoginComponent