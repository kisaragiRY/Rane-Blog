import React from 'react';
import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import {Home,Post,About,Error,Service, PostDetail} from './Pages';
import RootLayout from './Layouts/RootLayout';


const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<RootLayout/>}>
      <Route path='*' element={<Error/>} />
      <Route path='/'  element={<Home/>}/>
      <Route path= '/post/' element={<Post/>}/>
      <Route path='/post/tag/:tag' element={<Post/>}/>
      <Route path= '/post/:blog_id' element={<PostDetail/>}/>
      <Route path= '/service' element={<Service/>}/>
      <Route path= '/about' element={<About/>}/>
    </Route>
  )
)

// const homeUrl=process.env.PUBLIC_URL;
function App() {
  return (
    <RouterProvider router = {router} />
   
  );
}

export default App;
