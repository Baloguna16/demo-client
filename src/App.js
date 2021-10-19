import Cookies from 'js-cookie';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Flash from './components/base/Flash';
import Navbar from './components/base/Navbar';
import Error404 from './components/base/Error404';

import Index from './components/pages/Index';
import Main from './components/pages/Main';
import MainForm from './components/pages/MainForm';
import MainProtected from './components/pages/MainProtected';

const App = () => {
  const [flashMessages, setFlashMessages] = useState([]);
  const sessionToken = Cookies.get('sessionToken');
  return (
    <div className="App">
      <Navbar />
      <Flash flashMessages={flashMessages} setFlashMessages={setFlashMessages} />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/main">
          <Main setFlashMessages={setFlashMessages} />
        </Route>
        <Route exact path="/main/form">
          <MainForm setFlashMessages={setFlashMessages} />
        </Route>
        <Route exact path="/main/protected">
          <MainProtected />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
