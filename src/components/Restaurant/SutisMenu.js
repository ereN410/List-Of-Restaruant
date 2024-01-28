import React, { useState, useEffect } from 'react';
import './SutisMenu.css';
import { Link } from 'react-router-dom';

const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.menuimage} alt={item.menuname} />
      <div className="menu-details">
        <h3>{item.menuname}</h3>
        <p>{item.menucontent}</p>
        <p>Price: {item.menuprice}</p>
        <p>Category: {item.category}</p>
      </div>
    </div>
  );
};

const SutisMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://3a9afbc8f4bf4bc8a6d1d7b2134af9e0.api.mockbin.io/');
        if (!response.ok) {
          throw new Error('Failed to fetch menu data');
        }
        const data = await response.json();
        setMenuItems(data.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Sutis Menu</h2>
      <div className="menu-buttons">
        <Link to="/KahvaltiKarsilastirma">
            <button className="kahvalti-karsilastirma-btn">Kahvaltı Karşılaştırma</button>
        </Link>
        <Link to="/BaslangicKarsilastirma">
            <button className="baslangic-karsilastirma-btn">Başlangıç Karşılaştırma</button>
        </Link>
        <Link to="/AnaYemekKarsilastirma">
            <button className="anayemek-karsilastirma-btn">Ana Yemek Karşılaştırma</button>
        </Link>
        <Link to="/SalataKarsilastirma">
            <button className="salata-karsilastirma-btn">Salata Karşılaştırma</button>
        </Link>
        <Link to="/TatliKarsilastirma">
            <button className="tatli-karsilastirma-btn">Tatlı Karşılaştırma</button>
        </Link>
      </div>
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SutisMenu;
