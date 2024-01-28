import React, { useState, useEffect } from 'react';
import './BeyazFirinMenu.css';
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

const BeyazFirinMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://dd6f4a61ec37407e867c32762fa21d7d.api.mockbin.io/');
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
      <h2>Beyaz Firin Menu</h2>
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

export default BeyazFirinMenu;
