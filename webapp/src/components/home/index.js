import { h, Component } from 'preact';
import style from './style.less';
import List from 'components/list';
import Pagination from 'components/Pagination';
import axios from 'axios';

import { connect } from 'preact-redux';
import reduce from '../../reducers';
import * as actions from '../../actions';

@connect(reduce, actions)
export default class Home extends Component {
  getBooks() {
    // Injected into props by Redux `connect()` call:
    const { dispatch, q, startIndex } = this.props;

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}`)
      .then(response => this.props.loadBooksSuccess(response.data))
      .catch(error => this.props.loadBooksFailure(error))
  }

  getPreviousPage() {
    const currPage = this.props.currentPage - 1;
    this.props.setPage(currPage);
    this.props.setStartIndex(this.props.startIndex - 10);

    // workaround for now ;/ could be using async/await
    setTimeout(() => {
      console.log('new index', this.props.startIndex);
      this.getBooks();
    }, 500);
  }


  getNextPage() {
    const currPage = this.props.currentPage + 1;
    this.props.setPage(currPage);
    this.props.setStartIndex(this.props.startIndex + 10)

    // workaround for now ;/ could be using async/await
    setTimeout(() => {
      console.log('new index', this.props.startIndex);
      this.getBooks();
    }, 500);
  }

  componentWillMount() {
  }

  componentDidMount() {
    let { user, repo, q, startIndex } = this.props;
    this.getBooks();
  }

  render({
      todos,
      books,
      totalItems,
      currentPage,
      startIndex
    }, {}) {
    return (
      <div class={style.wrapper}>
        <h1 class={style.title}>Catalog</h1>

        <Pagination totalItems={totalItems} currentPage={currentPage}
          getPreviousPage={this.getPreviousPage.bind(this)} getNextPage={this.getNextPage.bind(this)}/>

        <nav>
          <ul>
            { todos.map(todo => (
              <li key={todo.id} todo={todo} onRemove={this.removeTodo}>{todo.text}</li>
            )) }
          </ul>
          <List items={books}>
          </List>
        </nav>
      </div>
    );
  }
};
