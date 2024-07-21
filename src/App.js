import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Nav from './components/navbar/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nav' element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
