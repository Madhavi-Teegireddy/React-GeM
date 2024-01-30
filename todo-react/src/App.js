import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Add/>} />
      </Routes>
    </div>
  );
}

export default App;
