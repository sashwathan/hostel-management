
import Homepage from './components/Homepage';
import './App.css';
// import Secondpage from './components/Secondpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayMenu from './components/DisplayMenu';
import ContactUs from './components/ContactUs';
import Faculty from './components/Faculty';
import Payments from './components/Payments';
import Blocks from './components/Blocks';
import Blockb from './components/Blockb';
import Blockc from './components/Blockc';
import Booking from './components/Booking';


function App() {
  const routes =(
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        {/* <Route path='/secondpage' exact element={<Secondpage />}/> */}
        <Route path='/displaymenu' exact element={<DisplayMenu/>}/>
        <Route path='/contactus' exact element={<ContactUs/>}/>
        <Route path='/faculty' exact element={<Faculty/>}/>
        <Route path='/payments' exact element={<Payments/>}/>
        <Route path='/blocks' exact element={<Blocks/>}/>
        <Route path='/blockb' exact element={<Blockb/>}/>
        <Route path='/blockc' exact element={<Blockc/>}/>
        <Route path='/booking' exact element={<Booking/>}/>
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
