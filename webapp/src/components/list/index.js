import { h } from 'preact';
import style from './style.less';
// import Pagination from 'components/pagination';
// import ListItem from 'components/listitem';

export default () => {
	return (
		<main class={style.list}>
			{/* <Pagination page={page} maxPages={Math.ceil(max / ITEMS_PER_PAGE)} type={type} /> */}
			<div>
				<span>Price</span>
				<span>Name</span>
				<span>SKU</span>
				<span>Brand Name</span>
				<span>Image</span>
			</div>
		</main>
	);
};
