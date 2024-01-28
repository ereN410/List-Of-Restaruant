import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuPage from './components/MenuPage/MenuPage';
import Restaurant from './components/Restaurant/Restaurant';
import BigChefsMenu from './components/Restaurant/BigChefsMenu';
import SutisMenu from './components/Restaurant/SutisMenu';
import BeyazFirinMenu from './components/Restaurant/BeyazFirinMenu';
import KahvaltiKarsilastirma from './components/Restaurant/KahvaltiKarsilastirma';
import AnaYemekKarsilastirma from './components/Restaurant/AnaYemekKarsilastirma';
import BaslangicKarsilastirma from './components/Restaurant/BaslangicKarsilastirma';
import SalataKarsilastirma from './components/Restaurant/SalataKarsilastirma';
import TatliKarsilastirma from './components/Restaurant/TatliKarsilastirma';
import Logo from './components/Restaurant/Logo';

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/MenuPage" element={<MenuPage />} /> 
          <Route path="/BigChefsMenu" element={<BigChefsMenu />} /> 
          <Route path="/SutisMenu" element={<SutisMenu />} /> 
          <Route path="/BeyazFirinMenu" element={<BeyazFirinMenu />} /> 
          <Route path="/KahvaltiKarsilastirma" element={<KahvaltiKarsilastirma />} /> 
          <Route path="/AnaYemekKarsilastirma" element={<AnaYemekKarsilastirma />} /> 
          <Route path="/BaslangicKarsilastirma" element={<BaslangicKarsilastirma />} /> 
          <Route path="/SalataKarsilastirma" element={<SalataKarsilastirma />} /> 
          <Route path="/TatliKarsilastirma" element={<TatliKarsilastirma />} /> 
          <Route path="/MenuPage" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
