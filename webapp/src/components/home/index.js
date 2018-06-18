import { h, Component } from 'preact';
import style from './style.less';
import List from 'components/list';
import Pagination from 'components/Pagination';
// import { memoize } from 'decko';
import axios from 'axios';

const getBooks = (q, startIndex) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}`).then(response => response.data)
}

// make available to homepage REPL demo
if (typeof window!=='undefined') window.getBooks = getBooks;

export default class Home extends Component {
  state = {
    books: localStorage._books || '',
    currentPage: 1,
    startIndex: 0,
    q: 'harry potter'
  };

  setBooks = (books, startIndex = 0, currentPage = 1) => {
    // console.log('set books', books)
    localStorage._books = books;
    this.setState({ books, startIndex, currentPage });
  };

  getPreviousPage(startIndex) {
    // console.log('previous page')
    // const currPage = this.state.currentPage - 1
    getBooks(this.state.q, this.state.startIndex - 10).then(books => {
      this.setBooks(books, this.state.startIndex - 10, currPage)
    });
  }


  getNextPage() {
    // console.log(this.state)
    // console.log('next page!', this.state.startIndex + 10, typeof (this.state.startIndex + 10))
    const currPage = this.state.currentPage + 1
    getBooks(this.state.q, this.state.startIndex + 10).then(books => {
      this.setBooks(books, this.state.startIndex + 10, currPage)
    });
  }

  componentWillMount() {
  }

  componentDidMount() {
    let { user, repo } = this.props;
    getBooks(this.state.q, this.state.startIndex).then(this.setBooks);
  }

  render({ user, repo, simple, children }, { books }) {
    return (
      <div class={style.wrapper}>
        <h1 class={style.title}>Catalog</h1>

        <Pagination totalItems={books.totalItems} currentPage={this.state.currentPage}
          getPreviousPage={this.getPreviousPage.bind(this)} getNextPage={this.getNextPage.bind(this)}/>

        <nav>
          <List items={books.items}>
          </List>
        </nav>
      </div>
    );
  }
};
