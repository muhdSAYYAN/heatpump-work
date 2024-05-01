import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/VideoSection/VideoSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
