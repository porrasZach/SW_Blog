import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BookForm } from './Components/BookForm';
import { Home } from './Components/Home';
import { TopNav } from './Components/TopNav';
import { SignIn } from './Components';
import { BookGrid } from './Components';
import { Blog } from './Components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
          <TopNav />
        <Switch>
          <Route path="/add-books">
            <BookForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/archive">
          <BookGrid />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home title={'Mos Eisley Archives'}/>
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
