import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import orderRequests from '../../firebaseRequests/orders';
import authRequests from '../../firebaseRequests/auth';

import './OrderSpa.css';

class OrderSpa extends React.Component {
  state = {
    orders: [],
  };

  componentDidMount () {
    orderRequests
      .getRequest(authRequests.getUid())
      .then(orders => {
        this.setState({orders: orders});
        // this.setState({orders});  ES6 shorthand
      })
      .catch(err => {
        console.error('error with orders get request ', err);
      });
  }

  render () {
    const orderComponents = this.state.orders.map(order => {
      return (
        <button
          key={order.id}
          className='col-xs-12 btn btn-default order-button'
        >
          <span className='col-xs-6'>Order number: {order.id}</span>
          <span className='col-xs-6'>Order date: {moment(order.dateTime).format('LLL')}</span>
        </button>
      );
    });
    return (
      <div className='OrderSpa col-xs-12'>
        <h2>Orders</h2>
        <button>
          <Link to='/new'>
            New Order
          </Link>
        </button>
        <ul>
          {orderComponents}
        </ul>
      </div>
    );
  }
};

export default OrderSpa;
