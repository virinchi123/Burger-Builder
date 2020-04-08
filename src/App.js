import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './components/Orders/Orders'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch><Route path='/' exact component={BurgerBuilder}/>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
