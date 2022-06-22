import "./CheckOutForm.css"

export default function CheckOutForm(props) {
    return (
        <div className={"check-out"}>
            <h1>Log in</h1>
            <form>
                <label htmlFor="check-out-form">Username</label>
                <input
                    name="username"
                    type="text"/>
                    <label htmlFor="check-out-form">Password</label>
                <input
                    name="username"
                    type="password"/>
                    <input type="submit" value="Log In"></input>
            </form>
        </div>
    )
}