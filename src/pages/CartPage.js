

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css';

// function CartPage({ cartItems, setCartItems }) {
//   const navigate = useNavigate();

//   const handleRemoveFromCart = (productId) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>

//       <div className="cart-items-container">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: 1</p>
//                 <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       <div className="cart-total">
//         <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
//       </div>

//       <div className="navigation-buttons">
//         <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
//           Back to Shop
//         </button>
//         <button onClick={() => navigate('/checkout')} style={{ marginTop: '20px' }}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleIncrease = (productId) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (productId) => {
    setCartItems(cartItems.map(item => 
      item.id === productId && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const handleRemove = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <h2>Your Cart</h2>

      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleIncrease(item.id)}>Increase</button>
                <button onClick={() => handleDecrease(item.id)}>Decrease</button>
                <button onClick={() => handleRemove(item.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-total">
        <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
          Continue Shopping
        </button>
        <button onClick={() => alert('Coming Soon')} style={{ marginTop: '20px' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
