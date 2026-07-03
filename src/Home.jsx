import React, { useEffect, useState } from 'react';

import { smartphoneProducts } from './smartphones';

const bannerWatchImg = '/images/banner.jpg';
const bannerWatchImg2 = '/images/bed.jpeg';
const bannerWatchImg3 = '/images/appl.jpg';


const heroBanners = [
  {
    id: 1,
    subtitle: 'Best Deal Online on smart watches',
    title: 'SMART WEARABLE.',
    highlight: 'UP to 20% OFF',
    background: 'linear-gradient(135deg, #1d293d 0%, #27384f 100%)',
    image: bannerWatchImg
  },
  {
    id: 2,
    subtitle: 'Premium Silk And Cotton Beddings',
    title: 'PREMIUM BEDDING.',
    highlight: 'New arrival • Premium style',
    background: 'linear-gradient(135deg, #7d8792 0%, #cfd6dc 50%, #4b5563 100%)',
    image: bannerWatchImg2
  },
  {
    id: 3,
    subtitle: 'Steel & Chrome Finish Elegance',
    title: 'APPLIANCES.',
    highlight: 'Save up to 40% today',
    background: 'linear-gradient(135deg, #6f1426 0%, #a33b3f 50%, #391018 100%)',
    image: bannerWatchImg3
  }
];

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousBanner = () => {
    setActiveBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const showNextBanner = () => {
    setActiveBanner((prev) => (prev + 1) % heroBanners.length);
  };

  const currentBanner = heroBanners[activeBanner];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* PART A: HERO BANNER CAROUSEL */}
      <div style={{ padding: '20px 60px', position: 'relative' }}>
        <button
          onClick={showPreviousBanner}
          style={{ position: 'absolute', left: '35px', top: '50%', transform: 'translateY(-50%)', width: '45px', height: '45px', borderRadius: '50%', border: 'none', backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', cursor: 'pointer', zIndex: 10, fontSize: '18px', color: '#008ecc' }}
        >
          ‹
        </button>

        <div style={{ width: '100%', height: '320px', background: currentBanner.background, borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 80px', position: 'relative', overflow: 'hidden', transition: 'background 0.5s ease' }}>
          <div style={{ color: '#ffffff', zIndex: 2 }}>
            <p style={{ fontSize: '18px', fontWeight: '400', marginBottom: '10px', color: '#eaeaea' }}>{currentBanner.subtitle}</p>
            <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 15px 0', letterSpacing: '1px' }}>{currentBanner.title}</h1>
            <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#ffffff', margin: 0 }}>{currentBanner.highlight}</h2>
            
            <div style={{ display: 'flex', gap: '6px', marginTop: '40px' }}>
              {heroBanners.map((banner, index) => (
                <span
                  key={banner.id}
                  style={{
                    width: index === activeBanner ? '20px' : '6px',
                    height: '4px',
                    backgroundColor: index === activeBanner ? '#ffffff' : 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img src={currentBanner.image} alt={currentBanner.title} style={{ height: '90%', objectFit: 'contain', borderRadius: '20px' }} />
          </div>
        </div>

        <button
          onClick={showNextBanner}
          style={{ position: 'absolute', right: '35px', top: '50%', transform: 'translateY(-50%)', width: '45px', height: '45px', borderRadius: '50%', border: 'none', backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', cursor: 'pointer', zIndex: 10, fontSize: '18px', color: '#008ecc' }}
        >
          ›
        </button>
      </div>

      {/* PART B: SMARTPHONE CAROUSEL GRID */}
      <div style={{ padding: '40px 60px 20px 60px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #eaeaea', paddingBottom: '12px', marginBottom: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: '600', color: '#666666' }}>
            Grab the best deal on <span style={{ color: '#008ecc', borderBottom: '3px solid #008ecc', paddingBottom: '11px', display: 'inline-block' }}>Smartphones</span>
          </div>
          <a href="#viewall" style={{ fontSize: '14px', fontWeight: '500', color: '#333333', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
            View All <span>›</span>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '15px' }}>
          {smartphoneProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '0 0 calc(20% - 16px)',
                minWidth: '200px',
                backgroundColor: '#ffffff',
                border: hoveredCard === product.id ? '1px solid #008ecc' : '1px solid #eaeaea',
                borderRadius: '16px',
                padding: '15px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: '15px', backgroundColor: '#008ecc', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '6px 8px', borderRadius: '6px 6px 6px 6px' }}>
                {product.discount}
              </div>

              <div style={{ width: '100%', height: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0 10px 0', backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '10px' }}>
                <img src={product.image} alt={product.title} style={{ height: '100%', objectFit: 'contain' }} />
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#333333', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333333' }}>${product.price}</span>
                  <span style={{ fontSize: '13px', color: '#999999', textDecoration: 'line-through' }}>${product.oldPrice}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Home;
