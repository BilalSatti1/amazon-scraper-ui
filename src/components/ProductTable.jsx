import React, { useEffect, useState } from 'react';
import './ProductTable.css';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://example.com/api/products") // Replace with your API endpoint
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Total Reviews</th>
            <th>Price</th>
            <th>Scrape Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.image_url} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>{product.total_reviews}</td>
              <td>{product.price}</td>
              <td>{product.scrape_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
