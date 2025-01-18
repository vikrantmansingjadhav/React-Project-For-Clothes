import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mens from './components/Mens';
import First from './components/First';

// import FirstCards from './components/FirstCards';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import Cards from './components/Cards';
import ProductInfo from './components/ProductInfo';
 import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Round from './components/Round'
import Explore from './components/Explore';
import Footer from './components/Footer';
import Input from './components/Input';


function App() {
  return (
   
        <>

         <CartProvider>
        

       <Router>

          {/* <First/>
      <Input/>
        <Cards/> */}
       
       {/* <Round/>
       <Explore/> */}



        <First/> 
       <Input/>
        

        <Explore/>
       <Round/>
        {/* <First/> 
       <Input/>
         */}
       
       
       

          <Routes>

           
           {/* <Route path='/' element={}/> */}
           {/* <Route path='/input' element={}/> */}
           <Route path='/' element={<Cards/>}/>
           <Route path='/Login' element = {<Login/>}/>
           <Route path='/productinfo/:id' element = {<ProductInfo/>}/>
           <Route path='/Cart' element = {<Cart/>}/>   
           <Route path='/Mens' element = {<Mens/>}/>   




          </Routes>

       <Footer/>


       </Router>
        
       </CartProvider>
        
        </>

  );
}


export default App;









         