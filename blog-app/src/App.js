import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Pages/Blog';
import Arrange from './Pages/Arrange';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Arrange/>} />
        <Route path="/blog/:id" element={<Blog/> }/>
      </Routes>
    </div>
  );
}

export default App;
