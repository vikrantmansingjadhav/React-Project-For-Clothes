
  
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import Dropdown from 'react-bootstrap/Dropdown';
  import { NavLink } from 'react-bootstrap';
  
 
     
       const First = () => {
  
       
     return(
  
   <>
            
            
         
         <Navbar id='navbar' style={{backgroundColor:"black"}} expand="lg" className="bg-body-black">
        <Container style={{backgroundColor:"black"}}>
          <Navbar.Brand href="#home"><img id='myntrashadow' style={{height:"6rem",borderRadius:"2rem",}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoLTeoO3dvjcxZP2VgVDj1VHycbpFAQ2ZIKy0Et9Aksi63KYn4cIBHxnKAi23Jhp0zLM&usqp=CAU" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               
  
          
            <Dropdown>
        <Dropdown.Toggle  variant="btn btn-outline-white" id="dropdown-basic">
        <NavLink to = "/mens" className='nav-link'><p style={{color:"white"}}>Mens</p></NavLink>
        </Dropdown.Toggle>
  
        {/* <Dropdown.Menu>
       
  
        </Dropdown.Menu> */}
      </Dropdown>
  
  
              <div id="womens">
  
                 
                  
              <Dropdown>
        <Dropdown.Toggle  variant="black" id="dropdown-basic">
        <button id='mens' style={{color:"white"}} className='btn btn-black'>Womens</button>
        </Dropdown.Toggle>
  
        {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><h3>Indian & Fusion Waer</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">kurtas & suits</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Kurtas tunics & tops</Dropdown.Item>
          <Dropdown.Item href="#/action-3">sarees</Dropdown.Item><br/>
            
  
          <Dropdown.Item href="#/action-1"><h3>Western Wear</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">dresses</Dropdown.Item>
          <Dropdown.Item href="#/action-2">tops</Dropdown.Item>
         
  
        </Dropdown.Menu> */}
      </Dropdown>
  
  
  
  
  
  
              </div>
            
  
             <div id="kids">
  
  
  
             <Dropdown>
        <Dropdown.Toggle variant="black" id="dropdown-basic">
        <button id='mens' style={{color:"white"}} className='btn btn-black'>Kids</button>
        </Dropdown.Toggle>
{/*   
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><h3>Boys Clothing</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">clothing sets</Dropdown.Item>
          <Dropdown.Item href="#/action-2">ethnic wear</Dropdown.Item>
          <Dropdown.Item href="#/action-3">track pants & pyjamas</Dropdown.Item><br/>
            
  
          <Dropdown.Item href="#/action-1"><h3>Girls Clothing</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">jeans trousers & caprins</Dropdown.Item>
          <Dropdown.Item href="#/action-2">jacket,sweater & sweatshirts </Dropdown.Item>
         
  
        </Dropdown.Menu> */}
      </Dropdown>
  
  
             </div><br />
  
  
             <div id='homeliving'>
  
  
             <Dropdown>
        <Dropdown.Toggle  variant="black" id="dropdown-basic">
         
        <button id='mens' style={{color:"white"}} className='btn btn-black'>Home&Living</button>
         
               </Dropdown.Toggle>
  
        {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><h3>Bed Linen & Furnishing</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">Bed Runners</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mattress protectors</Dropdown.Item><br/>
          
            
  
          <Dropdown.Item href="#/action-1"><h3>Bath</h3></Dropdown.Item>
          <Dropdown.Item href="#/action-1">bath towels </Dropdown.Item>
          <Dropdown.Item href="#/action-2">hands & face towels </Dropdown.Item>
         
  
        </Dropdown.Menu> */}
      </Dropdown>
   
  
  
             </div>
  
  
                
                <div style={{display:"flex"}} id='alllogo'>
  
  
    <NavLink to = "/Log in" className='nav-link'><button style={{position:"relative",left:"5rem",borderRadius:"1rem"}} className='btn btn-danger'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg></button></NavLink>
  
  

                <NavLink href = "/Cart" className='nav-link'><h2 style={{position:"relative",left:"7rem",color:"white"}}>Cart</h2></NavLink>
  
  
                  
                </div>

                
        
  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><br /><br />
  
  
  
             
           
     
                    
                    
  
      
         
   </>
        
  
     )
  
  
      }
  
       
  
     export default First;