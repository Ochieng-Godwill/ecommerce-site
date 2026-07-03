import React, { useState } from 'react';
import { groceryProducts } from './Grocery';

function Groceries() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ fontSize: '18px', fontWeight: '600', color: '#666666' }}>Grocery Products</div>
        <a href="#viewall" style={{ fontSize: '14px', fontWeight: '500', color: '#333333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          View All <span>›</span>
        </a>
      </div>

      <div style={{ display: 'flex', gap: '20px', padding: '15px 30px' }}>
        {groceryProducts.map((product) => {
          const isHovered = hoveredCard === product.id;

          return (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '0 0 210px',
                minWidth: '220px',
                backgroundColor: '#ffffff',
                border: isHovered ? '1px solid #008ecc' : '1px solid #eaeaea',
                borderRadius: '16px',
                padding: '15px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                boxShadow: isHovered ? '0 8px 20px rgba(0,142,204,0.12)' : 'none'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: '15px', backgroundColor: '#008ecc', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '6px 8px', borderRadius: '6px' }}>
                {product.discount}
              </div>

              <div style={{ width: '100%', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '15px 0 10px 0', backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '10px' }}>
                <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }} />
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#333333', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333333' }}>${product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Groceries;