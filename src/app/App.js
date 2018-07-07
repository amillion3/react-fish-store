import React, { Component } from 'react';
import Fish from '../Components/Fish/Fish';
import Home from '../Components/Home/Home';
import Inventory from '../Components/Inventory/Inventory';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import New from '../Components/New/New';
import Order from '../Components/Order/Order';
import OrderSpa from '../Components/OrderSpa/OrderSpa';
import Register from '../Components/Register/Register';
import SingleOrder from '../Components/SingleOrder/SingleOrder';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Fish />
        <Home />
        <Inventory />
        <Login />
        <Navbar />
        <New />
        <Order />
        <OrderSpa />
        <Register />
        <SingleOrder />

      </div>
    );
  }
}

export default App;
