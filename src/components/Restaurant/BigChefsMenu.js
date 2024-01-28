import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './BigChefsMenu.css';

const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.menuimage} alt={item.menuname} />
      <div className="menu-details">
        <h3>{item.menuname}</h3>
        <p>{item.menucontent}</p>
        <p>Fiyat: {item.menuprice}</p>
        <p>Kategori: {item.category}</p>

      </div>
    </div>
  );
};

const BigChefsMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://c71c06b22da74a25a7e88beff46c90f4.api.mockbin.io/');
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

  const filteredMenuItems = menuItems.filter(item =>
    item.menuname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Big Chefs Menu</h2>
      <div className="navigation">
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
      </div>
      <div className="menu-items">
        {filteredMenuItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BigChefsMenu;
