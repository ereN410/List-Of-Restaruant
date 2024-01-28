import React, { useState, useEffect } from 'react';
import './Restaurant.css';

const Restaurant = ({ match }) => {
  const [menuContent, setMenuContent] = useState(null);
  const { params: { id } } = match;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`https://neyfer.tech/api/restaurant${id}.json`);
        const data = await response.json();
        setMenuContent(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [id]);

  return (
    <div className="restaurant">
      {menuContent && (
        <div className="menu-content">
          <pre>{JSON.stringify(menuContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Restaurant;