import React from "react"
import Nav from "./Nav.css"

export default function Navbar() {
    const styles = {
        backgroundColor: "#f55a5a",
        padding: '1rem'
    }

    return (
            <nav className="nav-container"style={styles}>
                    <img src="https://cdn.icon-icons.com/icons2/3005/PNG/512/globe_americas_earth_icon_188225.png"/>
                    <a className="nav-title" href="#">Lugares que visitei</a>
            </nav>
    )
}