import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Header, Body } from '@components';
import { Page1, Page2 } from '@pages';

const App = () => {
  return (
    <>
      <Header />
      <Body>
        <div>app</div>
        <div>
          <Link to="/page1">to page1</Link>
        </div>
        <div>
          <Link to="/page2">to page2</Link>
        </div>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Body>
    </>
  );
};

export default App;
