import React from 'react'
import "../styles/Header.css"
import {useNavigate} from "react-router-dom"

const Header = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/cart");
      }

    return (
        <div>
            <header>
                <h2>Headers</h2>
                <nav>
                    <button onClick={handleClick}>Go to cart</button>
                </nav>
            </header>
        </div>
    )
}

export default Header
