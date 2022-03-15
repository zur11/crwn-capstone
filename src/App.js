/*
import React from 'react';
import './App.css';

import HomePage from './homepage.component';
*/

const App = () => {
  return (
    <div className="categories-container">
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">HATS</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">JACKETS</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">SNEAKERS</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">WOMEN'S</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">MEN'S</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
  );
}

export default App;
