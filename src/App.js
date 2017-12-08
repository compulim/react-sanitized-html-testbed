import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SanitizedHTML from 'react-sanitized-html';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <SanitizedHTML html={ 'This <a href="http://bing.com/">link</a> is generated by &lt;SanitizedHTML&gt;' } />
        </p>
        <p>
          <SanitizedHTML
            allowedTags={ ['br', 'p'] }
            html       ={ `<p>You should not see an image below because it is sanitized.<br /><img src="https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png" /></p>` }
          />
        </p>
      </div>
    );
  }
}

export default App;
