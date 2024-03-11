import { Route,BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import ProductsGrid from './components/ProductsGrid';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={ProductsGrid} />
        <Route exact path='/product-details/:id' Component={ProductDetails} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
