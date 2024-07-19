import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import './style/header.css';
import Home from './pages/Home';
import Test from './pages/Test';
import ResList from './pages/Reservation';
import Layout from './Layout';
import TouristDestination from './pages/TouristDestination';
import DestinationInfo from './pages/DestinationInfo';
import BeautifulCities from './pages/BeautifulCities';
import Nature from './pages/Nature';
import TopAttractions from './pages/TopAttractions';
import ReligiousSites from './pages/ReligiousSites';
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
          <Route path = "/top-attractions" element = {<TopAttractions/>}/>
          <Route path = "/nature" element = {<Nature/>}/>
          <Route path = "/beautiful-cities" element = {<BeautifulCities/>}/>
          <Route path = "/religious-sites" element = {<ReligiousSites/>}/>
        </Routes>
      </Layout>
        <Routes>
          <Route path = "/DestinationInfo" element = {<DestinationInfo/>}/>
        </Routes>
    </HashRouter>
  </React.StrictMode>
);
