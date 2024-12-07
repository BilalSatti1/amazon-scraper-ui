import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data for the selected category
    fetch(`/${category}.json`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <Link to="/">Back to Categories</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Total Reviews</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title || "N/A"}</td>
              <td>{product.total_reviews || "N/A"}</td>
              <td>{product.price || "N/A"}</td>
              <td>
                {product.image_url ? (
                  <img src={product.image_url} alt={product.title} width="100" />
                ) : (
                  "No Image"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPage;
