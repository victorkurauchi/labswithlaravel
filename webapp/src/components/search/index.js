import { h, Component } from 'preact';
import style from './style.less';

export default class Search extends Component {
	state = { text: '' };

	setText = e => {
		this.setState({ text: e.target.value });
	};

	search = () => {
		let { text } = this.state;
		console.log('call api to get search', text);
	};

	render({ }, { text }) {
		return (
			<div class={style.search}>
				<input class={style.input} value={text} onInput={this.setText} />
				<button type="buton" onClick={this.search}>Go!</button>
			</div>
		);
	}
}
