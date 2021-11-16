import React from 'react'
import "../styles/Header.css"
import {useNavigate} from "react-router-dom"

const Header = () => {

    let url = window.location.pathname;
    let navigate = useNavigate();
    function handleClick() {
        if(url === "/") return navigate("/cart");
        return navigate("/");
      }

    return (
        <div className="navbar">
            <header>
                <h2>Headers</h2>
                <nav>
                    <button onClick={handleClick}>
                        {url === "/cart"?"Home":"Go to cart"}
                    </button>
                </nav>
            </header>
        </div>
    )
}

export default Header
