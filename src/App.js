
//   import './App.css';
//   import Navbar from './component/Navbar';
//   import './component/Navbar.css'
//   import Chatbot from './component/Chatbot';
//   import './component/Chat.css'
//   import Feedback from './component/Feedback';
//   import './component/Feedback.css'
//   import Home from './component/Pages/Home';
//   import './component/Pages/Home.css'
//   import About from './component/Pages/About'
//   import './component/Pages/About.css'
//   import Contact from './component/Pages/Contact'
//   import './component/Pages/Contact.css';
//   import Footer from './component/Footer';
//   import './component/Footer.css'
//   import Ceramic from './component/Pages/Ceramic'
//   import './component/Pages/Ceramic.css'
//   import Engine from './component/Pages/Engine'
//   import './component/Pages/Engine.css'
//   import Paint from './component/Pages/Paint'
//   import './component/Pages/Paint.css'
//   import Carwrapping from './component/Pages/Carwrapping';
//   import './component/Pages/Carwrapping.css'
//   import Progressbar from'./component/Pages/Progressbar'
//   import './component/Pages/Progressbar.css'
//   import { Routes, Route} from 'react-router-dom'
 

//   import Adminpanel from './component/Pages/Dashboard/Adminpanel';
 



//   function App() {
   
    
//     return (
//       <>
     
//        {/* <AdminPanel/>  */}
      
//        <Navbar/>
//        <Chatbot/>
//        <Feedback/>
     
//        <Routes>
//        <Route path='/Adminpanel' element={<Adminpanel/>}/>
//         <Route path='/' element={<Home/>}/> 
//        <Route path='/About' element={<About/>}/>
//        <Route path='/Contact' element={<Contact/>}/>
//        <Route path='/Progressbar' element={<Progressbar/>}/>
//        <Route path='/Ceramic' element={<Ceramic/>}/>
//       <Route path='/Engine' element={<Engine/>}/>
//       <Route path='/Paint' element={<Paint/>}/>
//       <Route path='/Carwrapping' element={<Carwrapping/>}/>
    
//       </Routes>
    
//       <Footer/>
     
     
//       </>
//    );
//  }




//  export default App;

import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
// import './App.css';

import Navbar from './component/Navbar';
import './component/Navbar.css';
import Chatbot from './component/Chatbot';
import './component/Chat.css';
import Feedback from './component/Feedback';
import './component/Feedback.css';
import Home from './component/Pages/Home';
import './component/Pages/Home.css';
import About from './component/Pages/About';
import './component/Pages/About.css';
import Contact from './component/Pages/Contact';
import './component/Pages/Contact.css';
import Footer from './component/Footer';
import './component/Footer.css';
import Ceramic from './component/Pages/Ceramic';
import './component/Pages/Ceramic.css';
import Engine from './component/Pages/Engine';
import './component/Pages/Engine.css';
import Paint from './component/Pages/Paint';
import './component/Pages/Paint.css';
import AutoDetail from './component/Pages/AutoDetail';
import './component/Pages/AutoDetail.css';
import Progressbar from './component/Pages/Progressbar';
import './component/Pages/Progressbar.css';

import Adminpanel from './component/Pages/Dashboard/Adminpanel';

function App() {
  const location = useLocation();
  
  const isAdminPanel = location.pathname === '/Adminpanel';

  return (
    <>
      {!isAdminPanel && <Navbar />}
      {!isAdminPanel && <Chatbot />}
      {!isAdminPanel && <Feedback />}
      
      <Routes>
        <Route path="/Adminpanel" element={<Adminpanel />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Progressbar" element={<Progressbar />} />
        
        <Route path="/Ceramic" element={<Ceramic />} />
        <Route path="/Engine" element={<Engine />} />
        <Route path="/Paint" element={<Paint />} />
        <Route path="/AutoDetail" element={<AutoDetail />} />
      </Routes>
      
      {!isAdminPanel && <Footer />}
    </>
  );
}

export default App;

   
