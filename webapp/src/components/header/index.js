import { h, Component } from 'preact';
// import { Link } from 'preact-router';
import style from './style.less';
import Search from 'components/search';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>Iconic Catalog</h1>
        <nav>
          {/* <Link href="/">Home</Link>
          <Link href="/profile">Me</Link>
          <Link href="/profile/john">John</Link> */}
          <Search/>
        </nav>
      </header>
    );
  }
}
