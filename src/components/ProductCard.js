
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";



const ProductCard = (props) => {

    const {addItem} = useCart();

return(


    <>
    
                     

    
                 <Card id="cards" className="product-Card" style={{ width: '16rem', backgroundColor:"",marginTop:"30px",color:"white" }}>
      <Card.Img  variant="top" src={props.cover}  />
      <Card.Body>
        <Card.Title>Shirts</Card.Title>
        <Card.Text>
          


        </Card.Text>

           <NavLink to ={`/productinfo/${props.id}`}><Button id="know" variant="dark">Know More</Button></NavLink><br/><br/>

        <Button id="addtocart" onClick={() => addItem(props.item)} variant="danger">Add to Cart</Button>

      </Card.Body>
    </Card> 
 

        
                
            
    </>

)


}

export default ProductCard;