import { h, Component } from 'preact';
import style from './style.less';

export default class Pagination extends Component {
  render(props, state) {
    const { totalItems, currentPage } = props;
    const totalPages = totalItems ? Math.floor(totalItems / 10) : 1;
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;

    return (
      <div class={style.pagination}>
        <a href="#" onClick={() => { props.getPreviousPage(previousPage) }}>previous</a>
        <span>{currentPage} / {totalPages}</span>
        <a href="#" onClick={() => { props.getNextPage(nextPage) }}>next</a>
      </div>
    )
  }
};

