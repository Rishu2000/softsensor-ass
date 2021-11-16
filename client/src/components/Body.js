import React, {useEffect} from 'react'
import axios from 'axios'
import "../styles/Body.css"

const Body = () => {

    useEffect(() => {
        axios.get('http://localhost:3004/data')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{padding:"30px 40px", marginTop:"50px"}}>
            <h1 style={{textAlign:"center"}}>Products</h1>
                <div style={{paddingTop:"20px"}}>
                    <div style={{backgroundColor:"#bfbfbf", borderRadius:"5px", padding:"20px", width:"20%"}}>
                        <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product1" width="100%" style={{paddingTop:"10px"}}/>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop:"10px"}}>
                            <h4><i>Price:</i> 109.95</h4>
                            <h4><i>Rating:</i> 3.9(120)</h4>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', paddingTop:"10px"}}>
                            <button className="cartButton"style={{height: '40px'}}>Add to Cart</button>
                        </div>
                        <h4 style={{paddingTop:"10px"}}>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h4>
                    </div>
                </div>
        </div>
    )
}

export default Body
