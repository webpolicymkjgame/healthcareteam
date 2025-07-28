import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import loan from './assets/app/loan.png';
import casttotv from './assets/app/casttotv.png';
import gps from './assets/app/gps.png';
import mod from './assets/app/mod.png';
import money from './assets/app/money.png';
import recovery from './assets/app/recovery.png';
import widget from './assets/app/widget.png';


import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="HealthCareTeam Studio" className="logo-img" />
                <span className="studio-name">HealthCareTeam Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'Loan',
      image: loan,
      link: 'https://play.google.com/store/apps/details?id=com.emicalculator.investment.financialtools.loanplanner.easyemi'
    },
    {
      name: 'Money',
      image: money,
      link: 'https://play.google.com/store/apps/details?id=com.moneytracker.aimoney.moneymanager.finance'
    },
    {
      name: 'Cast to TV',
      image: casttotv,
      link: 'https://play.google.com/store/apps/details?id=com.casttotv.miracast.screenmirroring.remotecontrol'
    },
    {
      name: 'GPS Tracker',
      image: gps,
      link: 'https://play.google.com/store/apps/details?id=com.gps.tracker.location.geotracker'
    },
    {
      name: 'Mod for Minecraft',
      image: mod,
      link: 'https://play.google.com/store/apps/details?id=com.minecraft.morph.addons.mods'
    },
    {
      name: 'Recovery',
      image: recovery,
      link: 'https://play.google.com/store/apps/details?id=com.datarecovery.photorecovery.restoreimage.filerecovery'
    },
    {
      name: 'Color Widget',
      image: widget,
      link: 'https://play.google.com/store/apps/details?id=com.colorwidget.color.widget.topwidget'
    }

  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to HealthCareTeam Studio</h2>
            <p className="about-text">HealthCareTeam Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by HealthCareTeam – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:khanhlinh59037@gmail.com">khanhlinh59037@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              📍 Dan Hoa, Thanh Oai
                Ha Noi - 100000
                Vietnam (VN)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} HealthCareTeam Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
