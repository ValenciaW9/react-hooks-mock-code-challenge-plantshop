import React, { useState } from 'react';

const AddPlantForm = () => {
  const [plant, setPlant] = useState({ name: '', image: '', price: 0 });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plant),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // You can handle the response as needed
      })
      .catch(error => console.error('Error adding plant:', error));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={plant.name}
        onChange={event => setPlant({ ...plant, name: event.target.value })}
        placeholder="Plant Name"
      />
      <input
        type="text"
        value={plant.image}
        onChange={event => setPlant({ ...plant, image: event.target.value })}
        placeholder="Image URL"
      />
      <input
        type="number"
        value={plant.price}
        onChange={event => setPlant({ ...plant, price: event.target.value })}
        placeholder="Price"
      />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default AddPlantForm;