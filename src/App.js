


// import React, { useState, useEffect } from 'react';
// import './styles/App.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import ProductListingPage from './pages/ProductListingPage';
// import CartPage from './pages/CartPage';

// function App() {
//   // Initialize cart state from localStorage if available
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem('cartItems');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   // Whenever cartItems changes, update localStorage
//   useEffect(() => {
//     if (cartItems.length > 0) {
//       localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/products"
//           element={<ProductListingPage cartItems={cartItems} setCartItems={setCartItems} />}
//         />
//         <Route
//           path="/cart"
//           element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Shop</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
