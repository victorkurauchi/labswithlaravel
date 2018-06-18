import { h, Component } from 'preact';
import { Router } from 'preact-router';
// import { Provider } from '../lib/store';
// import createStore from '../store';

import Header from './header';
import Home from './home';
import Profile from './profile';
import BookDetail from './bookdetail';

// let store = createStore();

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <BookDetail path="/book/:id" />
        </Router>
      </div>
    );
  }
}
