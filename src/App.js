import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import PageNotFound from './Components/PageNotFound/PageNotFound.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie" element={<MovieDetail />}>
              <Route path=":imdbID/" element={<MovieDetail />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
