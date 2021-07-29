import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ProductBuilder from './containers/ProductBuilder/ProductBuilder';

class App extends Component {


  render () {
    let routes = (
        <Switch>
          <Route path="/" exact component={ProductBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    
    return (
      <div>
          <BrowserRouter>
            <Layout>
              {routes}
            </Layout>
          </BrowserRouter>
      </div>
    );
  }
}


export default App;
