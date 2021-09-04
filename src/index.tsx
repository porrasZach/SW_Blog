import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BookForm } from './Components/BookForm';
import { Home } from './Components/Home';
import { TopNav } from './Components/TopNav';
import { SignIn } from './Components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { sandTheme } from './Components/TopNav';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
          <Home title={'Mos Eisley Archives'}/>
          <TopNav />
        <Switch>
          <Route path="/books">
            <BookForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
