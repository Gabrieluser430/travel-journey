import React from "react"
import Nav from "./Nav.js"
import Travel from "./Travel.js"
import Data from "../data"

const customElements = Data.map(item => {
    return <Travel 
        item = {item}
    />
})

export default function App() {
    return (
        <div>
            <Nav />
            <main>
                {customElements}
            </main>
        </div>     
    )
}