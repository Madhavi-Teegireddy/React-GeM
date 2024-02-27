import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreditCard from './Components/CreditCard';
import Otp from './Components/Otp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreditCard/>} />
        <Route path="/otp" element={<Otp/>}/>
      </Routes>
    </div>
  );
}

export default App;
