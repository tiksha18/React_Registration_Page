import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/register';
import Header from './components/header';
import Landing from './components/landing';
import About from './components/about';
import SignIn from './components/signin';


function App() {
  return (
    <React.Fragment>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Landing></Landing>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/register" exact>
            <Register></Register>
          </Route>
          <Route path="/signin" exact>
            <SignIn></SignIn>
          </Route>
        </Switch>
    </React.Fragment>
  );
}

export default App;
