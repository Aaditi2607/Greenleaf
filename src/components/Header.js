import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#4CAF50' }}>
      <h1>Greenleaf</h1>
      <div>
        <Link to="/products" style={{ marginRight: '15px', color: '#fff' }}>Products</Link>
        <Link to="/cart" style={{ color: '#fff' }}>
          <span>Cart ({cartCount})</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
