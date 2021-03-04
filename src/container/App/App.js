import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Layout } from '../../hoc/Layout/Layout';
import { Home } from '../../pages/Home/Home';
import { Detail } from '../../pages/Detail/Detail';
import { Cart } from '../../pages/Cart/Cart';

const App = () => {
  return (
    <Layout>
      <Switch>
	      <Route exact  path="/" component={Home} />
	      <Route  path="/detail/:itemid" component={Detail} />
	      <Route  path="/cart/" component={Cart} />
    	</Switch>
    </Layout>
  );
}

export default App;
