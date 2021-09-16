import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Register from './components/register';
import SignIn from './components/signin';
import UploadDocs from './components/UploadDocs';
import UploadSecondDocs from './components/UploadSecondDocs';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact >
          <Register></Register>
        </Route>
        <Route path="/signin" exact >
          <SignIn></SignIn>
        </Route>
        <Route path="/details" exact >
          <Details></Details>
        </Route>
        <Route path="/uploaddocuments" exact >
          <UploadDocs></UploadDocs>
        </Route>
        <Route path="/uploaddocumentsmore" exact >
          <UploadSecondDocs></UploadSecondDocs>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
