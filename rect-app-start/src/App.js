import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Img from 'react-image';
import simage from './components/images/needservS.png';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => (
<div className="ui container">
  <Img src={simage} />
  <div>
  <Route path="/" exact component={RegisterPage} />
  <Route path="/login" exact component={LoginPage} />
  <Route path="/homepage" exact component={HomePage} />
  </div>
</div>
);

export default App;
