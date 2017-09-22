import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>改装清单</h1>
				<p>轮毂</p>
			</div>
		);
	}
}
