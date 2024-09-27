import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Descuento = () => {
  const [email, setEmail] = useState('');
  const [originalPrice] = useState(100);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/', { state: { originalPrice } });
  };

  return (
    <div className="container mt-4">
      <h1>Solicitar Descuento del 15%</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Solicitar Descuento</button>
      </form>
    </div>
  );
};

export default Descuento;