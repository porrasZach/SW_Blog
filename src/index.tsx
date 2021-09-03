import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Books } from './Components/Books';
import { Home } from './Components/Home';
import { SideNav } from './Components/SideNav';
import { ThemeProvider } from '@material-ui/core/styles';
import { sandTheme } from './Components/SideNav';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Home title={'Mos Eisley Archives'}/>
        <SideNav />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
