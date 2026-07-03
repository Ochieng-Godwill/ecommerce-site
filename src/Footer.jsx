import React, { useState } from 'react';

function Footer() {
  // Track hovered state for individual links using a string index like "popular-0" or "service-2"
  const [hoveredLink, setHoveredLink] = useState(null);

  const popularCategories = [
    "Staples", "Beverages", "Personal Care", "Home Care", 
    "Baby Care", "Vegetables & Fruits", "Snacks & Foods", "Dairy & Bakery"
  ];

  const customerServices = [
    "About Us", "Terms & Conditions", "FAQ", 
    "Privacy Policy", "E-waste Policy", "Cancellation & Return Policy"
  ];

  // Reusable inline style object for link items to keep code neat
  const getLinkStyle = (keyID) => ({
    color: '#ffffff',
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    opacity: hoveredLink === keyID ? '1' : '0.85',
    transform: hoveredLink === keyID ? 'translateX(4px)' : 'none',
    transition: 'all 0.2s ease-in-out'
  });

  return (
    <footer style={{
      backgroundColor: '#008ecc', // The signature MegaMart Blue
      color: '#ffffff',
      fontFamily: 'sans-serif',
      padding: '60px 80px 30px 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* BACKGROUND DESIGN WRAPPER: Circles on the right side */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        top: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '40px solid rgba(255, 255, 255, 0.04)',
        pointerEvents: 'none'
      }} />

      {/* THREE-COLUMN GRID LAYER */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        paddingBottom: '40px',
        marginBottom: '20px'
      }}>
        
        {/* COLUMN 1: BRAND & CONTACT INFO */}
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 30px 0', letterSpacing: '-0.5px' }}>
            MegaMart
          </h2>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', opacity: '0.9' }}>Contact Us</h4>
            <p style={{ fontSize: '14px', margin: '0 0 10px 0', display: 'flex', gap: '8px', alignItems: 'center' }}>
              🟢 <span style={{ opacity: '0.8' }}>Whats App</span>
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 15px 0' }}>+1 202-918-2132</p>
            
            <p style={{ fontSize: '14px', margin: '0 0 10px 0', display: 'flex', gap: '8px', alignItems: 'center' }}>
              📞 <span style={{ opacity: '0.8' }}>Call Us</span>
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0' }}>+1 202-918-2132</p>
          </div>

          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', opacity: '0.9' }}>Download App</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img 
                src="https://wikimedia.org" 
                alt="Download on App Store" 
                style={{ height: '38px', cursor: 'pointer' }}
              />
              <img 
                src="https://wikimedia.org" 
                alt="Get it on Google Play" 
                style={{ height: '38px', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        {/* COLUMN 2: POPULAR CATEGORIES */}
        <div style={{ flex: '1', paddingLeft: '40px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', display: 'inline-block' }}>
            Most Popular Categories
          </h3>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#ffffff', marginBottom: '20px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {popularCategories.map((item, index) => {
              const keyID = `popular-${index}`;
              return (
                <div 
                  key={item}
                  onMouseEnter={() => setHoveredLink(keyID)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={getLinkStyle(keyID)}
                >
                  <span style={{ fontSize: '10px', opacity: '0.5' }}>•</span> {item}
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3: CUSTOMER SERVICES */}
        <div style={{ flex: '1', paddingLeft: '40px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', display: 'inline-block' }}>
            Customer Services
          </h3>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#ffffff', marginBottom: '20px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {customerServices.map((item, index) => {
              const keyID = `service-${index}`;
              return (
                <div 
                  key={item}
                  onMouseEnter={() => setHoveredLink(keyID)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={getLinkStyle(keyID)}
                >
                  <span style={{ fontSize: '10px', opacity: '0.5' }}>•</span> {item}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* FOOTER COPYRIGHT BAR */}
      <div style={{
        textAlign: 'center',
        fontSize: '13px',
        opacity: '0.7',
        paddingTop: '10px'
      }}>
        © 2026 All rights reserved. Reliance Retail Ltd.
      </div>

    </footer>
  );
}

export default Footer;
