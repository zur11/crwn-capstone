/*
import React from 'react';
import './App.css';

import HomePage from './homepage.component';
*/

import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,  
      title: 'Hats', 
    },
    {
      id: 2,  
      title: 'Jackets', 
    },
    {
      id: 3,  
      title: 'Sneakers', 
    },
    {
      id: 4,  
      title: "Women's", 
    },
    {
      id: 5,  
      title: "Men's", 
    },
  ]

  return (
    <div className="categories-container">

      {categories.map(({title, id}) => (
        <div key={id} className="category-container">
        <div className="background-image" />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default App;
