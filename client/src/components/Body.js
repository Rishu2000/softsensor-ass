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
        <div style={{padding:"30px 40px"}}>
            Body
        </div>
    )
}

export default Body
