 import React from "react";
 import { useCart } from "react-use-cart";



 const Cart = () => {

     const { removeItem  , updateItemQuantity , items ,  cartTotal } = useCart();

   return(
 
      <>
       
        <div className="container">

           <div className="row"> 
           

         <h1>Cart</h1>

         <table className="table table-stripe-hover">
            
          <tr>
         
        <th>Id</th>
        <th>Image</th>
        <th>Name</th>
       <th>Price</th>
       <th>Color</th>
       <th>Actions</th>


       </tr>

       {


      items.map((cval) => {
 
           
return(


       <tr>


        <td>{cval.id}</td>
        <td><img src={cval.cover} height={100} width={100} /></td>
        <td>{cval.name}</td>
        <td>{cval.price}</td>
        <td>{cval.color}</td>
        <td><button onClick={() => updateItemQuantity(cval.id , cval.quantity +1)}>+</button></td>
 
       <td>{cval.quantity}</td>

        <td><button onClick={() => updateItemQuantity(cval.id,cval.quantity -1)}>-</button></td>
        <td><button onClick={() => removeItem(cval.id)} className="btn btn-danger">remove</button></td>

        <td><button className="btn btn-success">Order Now</button></td>



       </tr>


)


      })


       }


         </table>


         <h1>Total : {cartTotal}</h1>
      
        </div>
       </div> 

      
      </>



   )


 }

 export default Cart;