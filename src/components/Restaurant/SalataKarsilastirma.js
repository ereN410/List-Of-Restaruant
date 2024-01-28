import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './karsilastirma.css';

const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.menuimage} alt={item.menuname} />
      <div className="menu-details">
        <h3>{item.menuname}</h3>
        <p>{item.menucontent}</p>
        <p>Fiyat: {item.menuprice}</p>
        <p>Kategori: {item.category}</p>
        <p>{item.restorantid}</p>
      </div>
    </div>
  );
};

const SalataKarsilastirma = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://5c7a152431af486e9ffc9508cdc0ddcd.api.mockbin.io/');
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
      <h2>SALATALARIN ÜRÜN BİLGİSİ VE  FİYAT KARŞILAŞTIRMASI</h2>
      
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SalataKarsilastirma;
