import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { DiscountContext } from '../DiscountContext';

const Home = () => {
  const { discountActive, activateDiscount } = useContext(DiscountContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Productos</h1>
        <Link to="/descuento" className="btn btn-success" onClick={activateDiscount}>
          Solicitar Descuento
        </Link>
      </div>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} discountActive={discountActive} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
