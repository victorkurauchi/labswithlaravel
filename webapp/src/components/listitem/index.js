import { h, Component } from 'preact';
import style from './style.less';
import { Link } from 'preact-router';

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
          <Link href={`/book/${id}`}><h1>{volumeInfo.title}</h1></Link>
          <h2>by { volumeInfo.authors && volumeInfo.authors.length ? volumeInfo.authors.join(', ') : volumeInfo.authors }</h2>

          <p>{searchInfo ? searchInfo.textSnippet : 'No details provided'}</p>
          <p class={style.bookid}>Appears in: {
            volumeInfo.categories && volumeInfo.categories.length ? volumeInfo.categories.join(', ') : volumeInfo.categories
            }
          </p>

          <span>{saleInfo.country} / {saleInfo.saleability}</span>
          <p class={style.bookid}>Identifier: {id} / {kind}</p>
        </div>

        {/* <hr /> */}
      </article>
    )
  }
};

