import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../styles/Body.css"
import {useNavigate} from "react-router-dom"

const Body = () => {

    let url = window.location.pathname;
    let navigate = useNavigate();
    function handleClick() {
        if(url === "/") return navigate("/cart");
        return navigate("/");
      }

    const myArray = [];
    const [products, setProducts] = useState(myArray);

    useEffect(() => {
        // Get the data from backend using axios.
        axios.get('http://localhost:3004/data')
            .then((response) => {
                myArray.push(...response.data);
                setProducts([...myArray]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{padding:"30px 40px", marginTop:"50px"}}>
            <h1 style={{textAlign:"center"}}>Products</h1>
                <div style={{paddingTop:"20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {/* Added all the products which are comming from backend. */}
                    {products.map((product, key) => (
                        <div style={{backgroundColor:"#bfbfbf", borderRadius:"5px", padding:"20px", width:"230px", marginBottom:"20px"}}>
                        <h3 style={{minHeight:"70px"}}>{product.title}</h3>
                        <img src={product.image} alt="Product1" width="100%" style={{paddingTop:"10px", minHeight:"300px"}}/>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop:"10px"}}>
                            <h4><i>Price:</i> {product.price}</h4>
                            <h4><i>Rating:</i> {product.rating.rate}({product.rating.count})</h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', paddingTop:"10px"}}>
                            <button className="cartButton"style={{height: '40px'}} onClick={handleClick}>Add to Cart</button>
                        </div>
                        <h4 style={{paddingTop:"10px", paddingBottom:"20px"}}>{product.description}</h4>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Body
