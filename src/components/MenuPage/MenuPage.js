import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import { Link } from 'react-router-dom';
import bigchefLogo from '../../images/bigchef_logo.png';
import beyazfirinLogo from '../../images/beyazfirin_logo.png';
import sutisLogo from '../../images/sutis_logo.png';



const MenuPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className="menu-page">
      <h1>List Of Restaurants</h1>
      <h3>Menüsünü görmek istediğiniz restorantı seçiniz..</h3>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              to={`/restaurant/${restaurant.id}`}
              className="restaurant-link"
            >
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="button-container">
        <Link to="/BigChefsMenu" className="additional-button">
          <img src={bigchefLogo} alt="Big Chef Logo" />
        </Link>
        <Link to="/BeyazFirinMenu" className="additional-button">
          <img src={beyazfirinLogo} alt="Beyaz Fırın Logo" />
        </Link>
        <Link to="/SutisMenu" className="additional-button">
          <img src={sutisLogo} alt="Sütiş Logo" />
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
