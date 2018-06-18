import { h, Component } from 'preact';
import style from './style.less';

import { connect } from 'preact-redux';
import reduce from '../../reducers';
import * as actions from '../../actions';

function mapStateToProps(state) {
  return { books: state.books }
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) }
// }

// @connect(reduce, actions, mapStateToProps)
class BookDetail extends Component {
  // state = {
  //   count: 0
  // };

  // update the current time
  updateTime = () => {
    let time = new Date().toLocaleString();
    // this.setState({ time });
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
    this.updateTime();

    // every time we get remounted, increment a counter:
    // this.setState({ count: this.state.count+1 });
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ id }, { time, count }) {
    console.log('state to props?', this.props.books);

    return (
      <div class={style.detail}>
        <h1>Book: {id}</h1>
        <p>This is the book detail for a book with id {id}.</p>

        <div>Current time: {time}</div>
        <div>Book route mounted {count} times.</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookDetail);
