import React from 'react';
import { Route,IndexRoute} from 'react-router';
import App from './components/App';
import Example from './components/Example/Example';


export default(
    <Route path="/" component={App}>
<IndexRoute component={Example}/>
<Route path="example" component={Example}/>
    </Route>
);