import React, { useState } from 'react';
import baklava from './assets/images/image-baklava-desktop.jpg';
import waffle from './assets/images/image-waffle-desktop.jpg';
import brownie from './assets/images/image-brownie-desktop.jpg';
import macaron from './assets/images/image-macaron-desktop.jpg';
import tiramisu from './assets/images/image-tiramisu-desktop.jpg';

const Foodmenu = () => {
  const [cart, setCart] = useState([]);

  const desserts = [
    { id: 1, name: 'Waffle with Berries', price: 6.5, image: waffle },
    { id: 2, name: 'Vanilla Bean Crème Brûlée', price: 7.0, image: baklava },
    { id: 3, name: 'Macaron Mix of Five', price: 8.0, image: brownie },
    { id: 4, name: 'Chocolate Tart', price: 6.5, image: macaron },
    { id: 5, name: 'Pastry Delight', price: 7.0, image: tiramisu },
  ];

  const addToCart = (dessert) => {
    setCart([...cart, dessert]);
  };

  return (
    <div className=" bg-gray-50 p-8 flex justify-between">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Desserts</h1>
        <div className="grid grid-cols-3 gap-6">
          {desserts.map((dessert) => (
            <div key={dessert.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={dessert.image} alt={dessert.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold">{dessert.name}</h3>
              <p className="text-gray-500">${dessert.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(dessert)}
                className="mt-3 px-4 py-2 bg-white border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                Add to Cart
              </button>
              
              <img src={dessert.image} alt={`${dessert.name} thumbnail`} className="w-20 h-20 object-cover mt-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 bg-white p-4 rounded-lg shadow-md ml-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">Your added items will appear here</div>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                
                <img src={item.image} alt={`${item.name} thumbnail`} className="w-20 h-20 object-cover mr-2" />
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Foodmenu;
