import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  
   const Footer = () => {

 
    return(


          <>

          <br /><br /><br /><br />

<div style={{backgroundColor:'white', color:"black",padding:"6rem"}} className='container-fluid'>
      <Row>
        <Col  xs={{ order: 'first' }}>

             <h6>ONLINE SHOPPING</h6>

               <p>Men</p>
               <p>Women</p>
               <p>Kids</p>
               <p>Home&Living</p>
               <p>Beauty</p>
               <p>Gift Cards</p>
               <br />
               <hr />


        </Col>
        <Col xs>

              <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6><br /><br />

              <img style={{height:"8rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASMPYGNqMlM1uSQ16_UnQlvxpDD3P_OchWr7FumRVNkLvvny19GDoZ3I4v5IKIcsI8Ks&usqp=CAU" alt="" /><br/><br/><hr />
                   
                   <h6>KEEP IN TOUCH</h6><br />

                   <img style={{height:"4rem",borderRadius:"5rem"}} src="https://www.shutterstock.com/image-photo/valencia-spain-december-11-2019-260nw-1757100938.jpg" alt="" /><br/><hr />

        </Col>
        <Col xs>

        
        <img style={{height:"5rem",borderRadius:"10rem"}} src="https://logowik.com/content/uploads/images/100-original5165.logowik.com.webp" alt="" /><br/><br/>

        <h5>100% ORIGINAL</h5>
        <p>Guarantee For All Products</p><hr />
     
     <img style={{height:"3.50rem",borderRadius:"2rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9F-tYv9ezGn13Q-T6DYca1Y9x2pzfEg3q7VpVQFDraVL0DA0h0sSDkHlHsMZpVWi-yZ0&usqp=CAU" alt="" /><br/><br/>

     <h5>Return With In 14 Days</h5>
     <p>Of Receiving Your Order</p><br /><hr />
       
        </Col>
        <Col xs={{ order: 'first' }}>

           
        <h6>CUSTOMER POLICIES</h6>

           <p>Contact Us</p>
           <p>FAQ</p>
           <p>T&C</p>
           <p>Terms Of Use</p>
           <p>Track Orders</p>
           <p>Shipping</p>
           <br />
           <hr />

        </Col>
      </Row>
    </div>
          
          
          </>



    )



   }

   export default Footer;
  