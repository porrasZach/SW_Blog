import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, 
  TopNav, 
  BookForm, 
  BlogForm, 
  BookGrid, 
  BookZoom, 
  SignIn, 
  SignUp, 
  OuterRim, 
  OuterRimForm } from './Components';
import { Blog } from './Components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
          <Route path="/book-details">
          <BookZoom />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/blog-form">
            <BlogForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Switch>
          <Route path="/outer-rim">
            <OuterRimForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/outer-rim/results">
            <OuterRim />
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