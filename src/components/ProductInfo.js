import React from "react";
import pData from "./ProductData";
import { useParams } from "react-router-dom";


const ProductInfo = () => {

    const {id} = useParams();


   return(


           <>

               <h1 className="text-center my-5">Product Info</h1>

           
           {

            pData.map((cval) => {

                 if(id == cval.id){

            
                     return(

                
                         <>

                     
                    
                  <div className="container">

                     
                     <div className="row">

                        <div className="col-md-6">



                        <img src= {cval.cover} height={400} width={400} alt="product-img" />


                        </div>
           
                  

            <div className = "col-md-6">

                  <h1>Name : {cval.name}</h1>
                  <h3>Price : {cval.price}</h3>
                  <p>Color : {cval.color}</p>
                  <p>{cval.description}</p>
                  
                    <button className="btn btn-dark">add To cart</button>

            </div>

            </div>
 
 </div>

                

           
 

                      

                         </>



                     )

                 }
                  


            })


           }
           
           </>



   )


}

export default ProductInfo;