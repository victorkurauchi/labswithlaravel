import { h, Component } from 'preact';
import style from './style.less';

export default class ListItem extends Component {
  render(props, state) {
    const { volumeInfo, searchInfo, saleInfo, id, kind } = props.item;
    const { imageLinks } = volumeInfo;
    // console.log('rendering list item', props.item);
    return (
      <article class={style.article}>
        <div class={style.cardimage}>
          <img src={imageLinks ? imageLinks.thumbnail : ''} />
        </div>
        <div>
          <h1>{volumeInfo.title}</h1>
          <h2>by {volumeInfo.authors.join(', ')}</h2>

          <p>{searchInfo ? searchInfo.textSnippet : 'No details provided'}</p>
          <p class={style.bookid}>Appears in: {volumeInfo.categories.join(', ')}</p>

          <span>{saleInfo.country} / {saleInfo.saleability}</span>
          <p class={style.bookid}>Identifier: {id} / {kind}</p>
        </div>

        {/* <hr /> */}
      </article>
    )
  }
};

