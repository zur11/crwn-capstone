import react from "react";

import './homepage.styles.scss';

const HomePage = () => (

    <div className="homepage">
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
                    <h2 className="title">WOMEN</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-container">
            {/* <img /> */}
                <div className="category-body-container">
                    <h2 className="title">MEN</h2>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;