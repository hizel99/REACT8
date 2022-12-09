import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
function App() {
 
  return (

    <div className="container">

      <BrowserRouter >
        <h1>NAVBARrrr...</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" ><Link to={"/"}>Inicio</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to={"/Contact"}>Contacto</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to={"/AboutUs"}>Nosotros</Link></a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/AboutUs" element={<AboutUs />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
