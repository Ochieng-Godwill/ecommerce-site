import { useState } from 'react';
// This pulls the live products array directly from your folder!
import { localProducts } from './ProductData';

function ProductList() {
  const [products] = useState(localProducts);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Products Marketplace</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ 
                height: '140px', maxWidth: '100%', objectFit: 'contain', marginBottom: '10px',
                width: '100%',          // 1. Spans the full width of the card box
                height: '200px',        // 2. Sets a fixed matching height for uniform rows
                objectFit: 'cover',     // 3. Crops and fills the space without squishing/stretching
                objectPosition: 'center',// 4. Centers the crop point on the subject
                borderRadius: '6px 6px 0 0' // 5. Rounds the top edges to look clean
                }} 

            />
            <h4 style={{ fontSize: '13px', color: '#2c3e50', height: '40px', overflow: 'hidden', textAlign: 'center', margin: '10px 0' }}>
              {product.title}
            </h4>
            <p style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '16px', margin: '5px 0' }}>
              ${product.price}
            </p>
            <button style={{ background: '#2980b9', color: '#fff', border: 'none', width: '100%', padding: '10px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
