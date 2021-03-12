import React, { useState } from "react";
// display prodcts in card - name , imge , type, and brand name
// map per product to the page 
function Card(props){
 
    const { name, image, type, brandName, price, storeName } = props.cardResults;
    const [clicked, setClicked] = useState(false);
    const handleClick = (e)=>{
        setClicked(!clicked);
    }

    return(
        
        <>
        <div onClick={handleClick} style = {{border: "1px solid black"}}>
         
        { clicked && <div><p>Price: {price}</p> <p>{storeName}</p></div>}
        <h1>{name}</h1>
        <img style = {{maxWidth: 100, maxHeight: "auto"}}src= {image}></img>
        <p>{type}</p>
        <p>{brandName}</p>
        </div>
        </>
    )
}

export default Card;