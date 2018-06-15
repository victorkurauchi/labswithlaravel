import { h } from 'preact';
import style from './style.less';
// import List from 'components/list';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

export default () => {
	return (
		<div class={style.wrapper}>
			<h1>Catalog</h1>
			<nav>
				<List>
					<List.Item>
						<div>
							<span>Price</span>
							<span>Name</span>
							<span>SKU</span>
							<span>Brand Name</span>
							<span>Image</span>
						</div>
					</List.Item>
					<List.Item>
						<div>
							<span>Price</span>
							<span>Name</span>
							<span>SKU</span>
							<span>Brand Name</span>
							<span>Image</span>
						</div>
					</List.Item>
					<List.Item>
						<div>
							<span>Price</span>
							<span>Name</span>
							<span>SKU</span>
							<span>Brand Name</span>
							<span>Image</span>
						</div>
					</List.Item>
				</List>
			</nav>
		</div>
	);
};
