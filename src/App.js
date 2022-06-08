import React from 'react';
import './style.css';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ThemeSwitch from './components/ThemeSwitch';
import { ThemeContext } from './context';

export default function App() {
  let [theme, setTheme] = React.useState('light');
  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <ThemeSwitch changeTheme={(thm) => setTheme(thm)} />
      <ThemeContext.Provider value={theme}>
        <ProductList />
      </ThemeContext.Provider>
    </div>
  );
}
