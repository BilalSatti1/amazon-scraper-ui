import React from "react";
import { Link } from "react-router-dom";

const categories = ["headphones", "smartphones", "laptops", "monitors", "wireless earbuds", "smartwatches", "backpacks", "Bluetooth speakers", "external hard drives", "gaming keyboards"];

const HomePage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
