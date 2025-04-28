

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProductListingPage.css';

// const products = [
//   {
//     id: 1,
//     name: 'Aloe Vera',
//     price: 10.99,
//     category: 'Succulent',
//     image: '/images/aloe-vera.jpg'
//   },
//   {
//     id: 2,
//     name: 'Snake Plant',
//     price: 15.99,
//     category: 'Indoor',
//     image: '/images/snake-plant.jpg'
//   },
//   {
//     id: 3,
//     name: 'Spider Plant',
//     price: 12.99,
//     category: 'Indoor',
//     image: '/images/spider-plant.jpg'
//   },
//   {
//     id: 4,
//     name: 'Cactus',
//     price: 9.99,
//     category: 'Succulent',
//     image: '/images/cactus.jpg'
//   },
//   {
//     id: 5,
//     name: 'Fiddle Leaf Fig',
//     price: 25.99,
//     category: 'Indoor',
//     image: '/images/fiddle-leaf-fig.jpg'
//   },
//   {
//     id: 6,
//     name: 'Peace Lily',
//     price: 18.99,
//     category: 'Flowering',
//     image: '/images/peace-lily.jpg'
//   },
// ];

// function ProductListingPage({ cartItems, setCartItems }) {
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     setCartItems((prevCart) => {
//       // Add the product to the cart
//       const updatedCart = [...prevCart, product];
//       return updatedCart;
//     });
//   };

//   return (
//     <div>
//       <h2>Product Listing</h2>

//       <div className="products-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <p>Category: {product.category}</p>
//             <button
//               onClick={() => handleAddToCart(product)}
//               disabled={cartItems.some((item) => item.id === product.id)}
//             >
//               {cartItems.some((item) => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
//             </button>
//           </div>
//         ))}
//       </div>

//       <button onClick={() => navigate('/cart')} style={{ marginTop: '20px' }}>
//         Go to Cart ({cartItems.length})
//       </button>
//     </div>
//   );
// }

// export default ProductListingPage;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductListingPage.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10.99, category: 'Succulent', image: '/images/aloe-vera.jpg' },
  { id: 2, name: 'Snake Plant', price: 15.99, category: 'Indoor', image: '/images/snake-plant.jpg' },
  { id: 3, name: 'Spider Plant', price: 12.99, category: 'Indoor', image: '/images/spider-plant.jpg' },
  { id: 4, name: 'Cactus', price: 9.99, category: 'Succulent', image: '/images/cactus.jpg' },
  { id: 5, name: 'Fiddle Leaf Fig', price: 25.99, category: 'Indoor', image: '/images/fiddle-leaf-fig.jpg' },
  { id: 6, name: 'Peace Lily', price: 18.99, category: 'Flowering', image: '/images/peace-lily.jpg' },
];

function ProductListingPage({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      return; // If already in the cart, don't add again
    }

    setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some(item => item.id === product.id)}
            >
              {cartItems.some(item => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/cart')} style={{ marginTop: '20px' }}>
        Go to Cart ({cartItems.length})
      </button>
    </div>
  );
}

export default ProductListingPage;
