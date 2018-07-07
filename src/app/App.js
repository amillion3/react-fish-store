import React, {Component} from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
// import Fish from '../Components/Fish/Fish';
import Home from '../Components/Home/Home';
import Inventory from '../Components/Inventory/Inventory';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
// import New from '../Components/New/New';
// import Order from '../Components/Order/Order';
// import OrderSpa from '../Components/OrderSpa/OrderSpa';
import Register from '../Components/Register/Register';
// import SingleOrder from '../Components/SingleOrder/SingleOrder';
import fbConnection from '../firebaseRequests/connection';
import './App.css';
fbConnection();

// helper function                   ...rest = any other components
const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/orders', state: {from: props.location}}}
          />
        )
      }
    />
  );
};
class App extends Component {
  state = {
    authed: false,
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className='container'>
            <div className='row'>
              <Switch>
                <Route path='/' exact component={Home}/>
                <PrivateRoute
                  path='/inventory'
                  authed={this.state.authed}
                  component={Inventory} />
                <PublicRoute
                  path='/register'
                  authed={this.state.authed}
                  component={Register} />
                <PublicRoute
                  path='/login'
                  authed={this.state.authed}
                  component={Login} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
