import React, {useState} from "react"
import {render} from "react-dom"


function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    if(loggedIn) {   // Here the user is loggedIn
        return (
            <> 
                <h1>Welcome to our Application</h1>
                <button onClick={() => setLoggedIn(false)}>Logout</button>
            </>
        )
    } else {
        return (
            <> 
                <h2>Please Login In</h2>
                <button onClick={ () => setLoggedIn(true)}>Log In</button>
            </>
        )
    }

}

render(<App /> , document.querySelector("#root"))