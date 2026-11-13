import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">Redux Shopping Cart</span>
      </nav>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;