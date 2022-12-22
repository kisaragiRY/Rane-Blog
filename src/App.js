import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home,Post,About,Error,Service} from './Pages'
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/Footer/Footer';

// const homeUrl=process.env.PUBLIC_URL;
function App() {
  return (
   
    <Router>
      <Navbar/>
      <div className='container'>
      <Routes>
          <Route path='*' element={<Error/>} />
          <Route path='/'  element={<Home/>}/>
          <Route path= '/post/' element={<Post/>}/>
          <Route path='/post/tag/:tag' element={<Post/>}/>
          <Route path= '/post/:blog_id' element={<Post/>}/>
          <Route path= '/service' element={<Service/>}/>
          <Route path= '/about' element={<About/>}/>
      </Routes>
      <Footer/>
       </div>
    </Router>
   
  );
}

export default App;
