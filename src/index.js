import React, {useState} from "react"
import {render} from "react-dom"
import "./styles.css"


const animeDatabase = {
    Five_Rating: [
        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        }
    ],

    Four_Rating: [
        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        }
        
    ],

    Three_Rating: [
        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        },


        {
            name:"",
            release_Date:"",
            description: "",
        },

        {
            name:"",
            release_Date:"",
            description: "",
        }
    ]
};





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
                <div className="container">
        <h1>Welcome to Anime Watch</h1>
        <h4>Know which anime to watch based on the ratings provided</h4>
        <button className="login-btn" onClick={ () => setLoggedIn(true)}>Log In</button>
            </div>
            </>
        )
    }

}

render(<App /> , document.querySelector("#root"))