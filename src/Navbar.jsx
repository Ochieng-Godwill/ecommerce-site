import React, { useState } from 'react';

function Navbar() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      zIndex: 1000,
      fontFamily: 'sans-serif',
      boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
    }}>
      
      {/* 1. TOP UTILITY BAR (Thin gray row) */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 60px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #eaeaea',
        fontSize: '12px',
        color: '#666666'
      }}>
        <div>Welcome to MegaOnlineStore!</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            📍 Deliver to<button style={{backgroundColor:"transparent", border:"none", borderRadius:"4px", padding:"0 10px"}}> <strong style={{  color: '#333', position:"relative", fontSize:"13px", cursor:"pointer" }}>423651</strong></button>
          </div>
          <div>
                <button style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}}>
                    🚚 Track your order
                </button>
            </div>
            <div>
                <button
                     style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}}>🧭 All Offers</button>
            </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR ROW (Logo, Search, Actions) */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        borderBottom: '1px solid #eaeaea'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            cursor: 'pointer',
            padding: '8px',
            backgroundColor: '#f4f9fd',
            borderRadius: '6px'
          }}>
          </div>
          <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#008ecc', letterSpacing: '-0.5px' }}>
            MegaOnlineStore
          </span>
        </div>

        {/* Center: Styled Input Search Bar */}
        <div style={{ position: 'relative', width: '45%', maxWidth: '600px' }}>
          <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#008ecc' }}>
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search essentials, groceries and more..." 
            style={{
              width: '100%',
              padding: '12px 45px',
              backgroundColor: '#f4f9fd',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              color: '#333'
            }}
          />
            <div>
                <button 
                    style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#008ecc', border: 'none', cursor: 'pointer', color:"#ffffff", padding: '8px 12px', borderRadius: '4px', fontSize: '13px' }}>
                    Search
                </button>
            </div>
        </div>

        {/* Right Side: Account and Shopping Cart links */}
        <div
         style={{ display: 'flex', alignItems: 'center', gap: '25px', fontSize: '15px', fontWeight: '500', color: '#4f5d75' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            👤 Sign Up/Sign In
          </div>
          <div style={{ height: '20px', width: '1px', backgroundColor: '#ddd' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#008ecc' }}>
            🛒 <span style={{ color: '#4f5d75' }}>Cart</span>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM CATEGORY FILTER ROW (Pills) */}
      <div style={{
        display: 'flex',
        gap: '12px',
        padding: '15px 50px',
        whiteSpace: 'nowrap'
      }}>
        {/* Active Pill */}
        <button style={{ backgroundColor: '#008ecc', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
          Groceries
        </button>
                {/* Secondary Category Pills with Hover Effects */}
        {["Premium Fruits", "Home & Kitchen", "Fashion", "Electronics", "Beauty", "Home Improvement", "Sports, Toys & Luggage"].map((category) => (
          <button 
            key={category} 
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{ 
              // DYNAMIC STYLING: If this pill is hovered, change its color
              backgroundColor: hoveredCategory === category ? '#e1f0fa' : '#f4f9fd', 
              color: hoveredCategory === category ? '#008ecc' : '#4f5d75', 
              border: hoveredCategory === category ? '1px solid #008ecc' : '1px solid transparent',
              padding: '8px 16px', 
              borderRadius: '20px', 
              fontSize: '13px', 
              fontWeight: '500', 
              cursor: 'pointer',
              transition: 'all 0.2s ease' // Makes the color change smooth instead of snappy
            }}
        >
            {category}
          </button>
        ))}    
      </div>

    </header>
  );
}

export default Navbar;
