import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Nav from './components/navbar/nav';
import { useContext, useState } from 'react';
import { mycontext } from './components/context';
import { propertycard, sliderimages } from './components/datafile';
import Footer from './components/footer/footer';

function App() {
  const [images, setimages] = useState(sliderimages)
  const [card, setcard] = useState(propertycard)

  const values = {
    images, setimages, card, setcard
  }
  return (
    <div className="App">
      <BrowserRouter>
        <mycontext.Provider value={values}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='nav' element={<Nav />} />
            <Route path='footer' element={<Footer />} />
          </Routes>
          <Footer/>
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
