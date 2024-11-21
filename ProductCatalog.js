import React, { useState } from 'react';
import './ProductCatalog.css'; // Create styles for the catalog

const initialProducts = [
  {
    id: 1,
    name: 'Photo Frame',
    image: 'https://oliveandpip.co.uk/cdn/shop/products/ACS_0833_1946x.jpg?v=1620652228',
    description: 'A personalized photo frame to cherish your memories.',
    price: 500,
    category: 'Home Decor',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Photo Wall Clock',
    image: 'https://i.etsystatic.com/18255915/r/il/2feb1c/5352535389/il_570xN.5352535389_gpf4.jpg',
    description: 'A clock with space for your favorite photos.',
    price: 1000,
    category: 'Home Decor',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Resin Art',
    image: 'https://images.squarespace-cdn.com/content/v1/60f960aac2eb604dcfb280fa/1718445413051-SDA2JHYM8I18MOFCMMH0/ocean-art1.jpg',
    description: 'Custom resin artwork with beautiful designs.',
    price: 1500,
    category: 'Art & Craft',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Name Plate',
    image: 'https://cdn.hcbrands.com/media/catalog/product/cache/4/image/290x290/9df78eab33525d08d6e5fb8d27136e95/e/n/engraved-plastic-personalized-name-plate_1.png',
    description: 'Stylish nameplates for your home or office.',
    price: 700,
    category: 'Home Decor',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Personalized Pillow',
    image: 'https://images-cdn.ubuy.com.sa/65900c1bf2dc025f457f3e9f-eagasy-personalized-pet-photo-memorial.jpg',
    description: 'A cozy pillow with your custom design.',
    price: 600,
    category: 'Bedding',
    rating: 4.3,
  },
];

function ProductCatalog() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">₹{product.price}</p>
            <p className="rating">Rating: ⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart Items: {cart.length}</h3>
        {cart.length > 0 && (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
