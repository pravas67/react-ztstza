import React from 'react';
import './style.css';
import Product from './components/Product';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <ProductList />
    </div>
  );
}
