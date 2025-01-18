import ProductCard from "./ProductCard";
import pData from "./ProductData";



const Cards = () => {



return(


     <>
     
          

           <div className="container">

   
          <div style={{justifyContent:"space-around"}} className="row">

                     

         
          {
                 
                       pData.map((cval , index) => {

             return(

                   <>

                     
                    


                   <ProductCard
                   
                    id = {cval.id}
                    name = {cval.name}
                    cover = {cval.cover}
                    color = {cval.color}  
                    item = {cval}  

                   
                   />

                  

                   </>

                  


             )



                       })


          }
           



         </div>
        



           </div>

          
         
     
     </>


)


}

export default Cards;