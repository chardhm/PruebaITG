import { BrowserRouter, Routes, Route } from 'react-router-dom';


//components
import Navbar from './components/Navbar/Navbar';
import Vivair from './components/Vivair/Vivair';
import Avianca from './components/Avianca/Avianca';
import Aeromexico from './components/Aeromexico/Aeromexico';
import Emirates from './components/Emirates/Emirates';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>

        {/* Rutas del menú */}
        <Route path="/" element={ <Home /> } />
        <Route path="/Vivair" element={ <Vivair /> } />
        <Route path="/Avianca" element={ <Avianca /> } />
        <Route path="/Aeromexico" element={ <Aeromexico /> } />
        <Route path="/Emirates%20Airline" element={ <Emirates /> } />

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
