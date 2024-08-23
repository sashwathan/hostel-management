
import Homepage from './components/Homepage';
import './App.css';
import Secondpage from './components/Secondpage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const routes =(
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        <Route path='/secondpage' exact element={<Secondpage />}/>
      </Routes>
       </Router>
  );
  return (
    <div className="App">
      <div>
      {routes}
    </div>
    
    </div>
  );
}

export default App;
