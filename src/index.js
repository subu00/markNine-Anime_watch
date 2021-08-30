import React from "react";
import {render} from "react-dom"
import BeforeLogin  from "./BeforeLogin";

function App() {
    return (
        <> 
            <h1>Hello Sippy</h1>
            <BeforeLogin />
        </>
    )
}

render(<App />, document.querySelector("#root"))