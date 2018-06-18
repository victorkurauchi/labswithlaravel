import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';

import { connect } from 'preact-redux';
import reduce from '../../reducers';
import * as actions from '../../actions';

@connect(reduce, actions)
export default class Search extends Component {
  state = { text: '' };

  setText = e => {
    this.setState({ text: e.target.value });
  };

  search = () => {
    let { text } = this.state;
    console.log('call api to get search', text);
    const { dispatch } = this.props;

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=${0}`)
      .then(response => this.props.loadBooksSuccess(response.data))
      // .then(response => this.props.addTodo('kkkk'))
      .catch(error => this.props.loadBooksFailure(error))
  };

  render({ }, { text }) {
    return (
      <div class={style.search}>
        <input class={style.input} value={text} onInput={this.setText} />
        <button class={style.button} type="buton" onClick={this.search}>Search</button>
        <small>Suggestion: marvel</small>
      </div>
    );
  }
}
