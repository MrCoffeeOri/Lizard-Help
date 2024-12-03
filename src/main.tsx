import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/main.css';
import Landing from './pages/Landing';
import Start from './pages/Start';
import Home from './pages/Home';
import Error from './pages/Error';
import Client from './pages/Client';
import Technician from './pages/Technician';
import { UserContextProvider } from './components/UserContext';
import Auth from './pages/Auth';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
            <Route path="/start" component={Start} />
            <Route path="/client" component={Client} />
            <Route path="/user">
              <Auth>
                <Switch>
                  <Route path="/user/home" component={Home} />
                  <Route path="/user/technician" component={Technician} />~
                  <Route component={Error} />
                </Switch>
              </Auth>
          </Route>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);