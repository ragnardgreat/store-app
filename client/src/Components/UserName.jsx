
function UserName() {

    switch (sessionStorage.getItem("username")) {
        case null:
            return (
                <>
                    <h1 id="username">User: Guest</h1>
                </>)
        default:
            return (
                <>
                    <h1 id="username">User: {sessionStorage.getItem("username")}</h1>
                </>
            )

    }
}

export default UserName