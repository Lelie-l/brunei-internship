import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import './style/header.css';
import Home from './pages/Home';
import Test from './pages/Test';
import ResList from './pages/Reservation';
import Layout from './Layout';
import TouristDestination from './pages/TouristDestination';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/ResL" element={<ResList />} />
          <Route path = "/Destinations" element = {<TouristDestination/>}/>
        </Routes>
      </Layout>
    </HashRouter>
  </React.StrictMode>
);
