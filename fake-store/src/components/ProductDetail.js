import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado.</div>;

  return (
    <div className="container mt-4">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="img-fluid" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
