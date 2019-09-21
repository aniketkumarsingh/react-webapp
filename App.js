import React, { Component } from 'react';
import './App.css';

//import Carousel from './Body/Carousel';
//import Toolbar from './Components/Toolbar/Toolbar';
//import Kav from './Components/Toolbar/Kav';
//import Products from './Components/Products/Products';
import ProductCard from './Body/ProductCard'
//import Footer from './Body/Footer';
//import Authentication from './Authentication'
//import Investkeen from './Investkeen'


class App extends Component {
  render() {
    return (
      <div id='root'>
    
      <ProductCard/>
    
    </div>
    );
  }
}

export default App;

