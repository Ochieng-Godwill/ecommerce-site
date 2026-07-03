import React, { useState } from 'react';
import { topCategories } from './category'; // Pulling the data array safely

function Categories() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* SECTION HEADER BLOCK */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #eaeaea', paddingBottom: '12px', marginBottom: '30px' }}>
        <div style={{ fontSize: '18px', fontWeight: '600', color: '#666666' }}>
          Shop From <span style={{ color: '#008ecc', borderBottom: '3px solid #008ecc', paddingBottom: '11px', display: 'inline-block' }}>Top Categories</span>
        </div>
        <a href="#viewall" style={{ fontSize: '14px', fontWeight: '500', color: '#333333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          View All <span>›</span>
        </a>
      </div>

      {/* CIRCULAR PILLS ROW LIST CONTAINER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', gap: '15px' }}>
        {topCategories.map((cat) => {
          // Check if this card is currently hovered or marked active
          const isHovered = hoveredId === cat.id;
          const hasRing = cat.active || isHovered;

          return (
            <div
              key={cat.id}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '1',
                minWidth: '90px',
                cursor: 'pointer'
              }}
            >
              {/* THE ROUND CIRCULAR IMAGE FRAME WINDOW */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%', // Forces a perfect circle geometry shape
                backgroundColor: '#f4f9fd',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px',
                marginBottom: '14px',
                transition: 'all 0.2s ease-in-out',
                // Dynamic border ring style layout calculations
                border: hasRing ? '1px solid #008ecc' : '1px solid #eaeaea',
                boxShadow: hasRing ? '0 8px 20px rgba(0,142,204,0.12)' : 'none',
                transform: isHovered ? 'translateY(-4px)' : 'none'
              }}>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '20%' }} 
                />
              </div>

              {/* LABEL TEXT */}
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#333333', textAlign: 'center' }}>
                {cat.title}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Categories;
