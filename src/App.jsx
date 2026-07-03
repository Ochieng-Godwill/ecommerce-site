import Navbar from './Navbar';
import Home from './Home';
import Categories from './Categories';
import Groceries from './Groceries';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* 1. Navbar stays on top */}
      <Navbar /> 
      
      {/* 2. Main Storefront Grid below */}
      <Home />
      {/*3. Categories Section */}
      <Categories />
      {/*4. grocery section*/}
      <Groceries />
      {/*5. footer section*/}
      <Footer />
    </div>
  );
}

export default App;

