import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home,Post,About} from './Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
