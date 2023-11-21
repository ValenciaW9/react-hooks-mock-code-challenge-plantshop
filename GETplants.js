import React, { useState, useEffect } from 'react';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      {plants.map(plant => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PlantList;