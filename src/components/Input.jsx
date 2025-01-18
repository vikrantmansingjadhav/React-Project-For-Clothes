import { useState } from "react";
import Cart from "./Vik";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



   const Input = () => {

     const [Search , setSearch] = useState("");
     const [SearchCards , setSearchCards] = useState([]);

     const handleSearch = () => {

    const filterCards = Cart.filter(card => 
      
      card.title.toLowerCase().includes(Search.toLowerCase())
         
      
      )

      setSearchCards(filterCards);


     }
       
       return(
 
             <>

            

             <div className="container">

         <div style={{justifyContent:"center"}} className="row">

         
         <input  style={{width:"30rem"}} className="form-control" type="text" value={Search} onChange={(e) => setSearch(e.target.value)} name="" id="search" placeholder="Search For Brands" />
             
             <button style={{width:"5rem"}} className="btn btn-danger" onClick={handleSearch}>Search</button>

                    
                    <div className="container"><br /><hr />


                              <div style={{justifyContent:"space-around"}} className="row">

                          {


                       SearchCards.map(card => (

                                  
                        <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:"21rem"}} variant="top" src={card.image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                           
                          </Card.Text>
                          <Button variant="dark">Know More</Button>
                          <Button variant="danger">Add to Cart</Button>
                        </Card.Body>
                      </Card>
                             
                        
                                

                       ))


                          }   
                          
 

                              </div>


                    </div>


         </div>
              
 

             </div><br /><br />
              
             

             </>


       )
 

   }

   export default Input;