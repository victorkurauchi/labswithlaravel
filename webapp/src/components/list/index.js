import { h, Component } from 'preact';
import style from './style.less';
import ListItem from 'components/listitem';

export default class List extends Component {
  renderedBooks(books) {
    console.log('redenring', books)
    if (!books || !books.length) {
      return (<div></div>)
    }
    return (
      books.map(book => {
        return <div>{book.title}</div>
      })
    )
  }

  do() {

  }

  render(props, state) {
    return (
      <div>
        { props.items && props.items.length ? props.items.map((item, index) => (
          <ListItem item={item} onAction={this.do} key={index} index={index} />)
        ) : null }
      </div>
    )
  }
};

