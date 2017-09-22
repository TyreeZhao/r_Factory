import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>朝保</h1>
				<nav>
					<Link activeClassName={style.active} href="/">主页</Link>
					<Link activeClassName={style.active} href="/profile">保养</Link>
					<Link activeClassName={style.active} href="/profile/john">维修</Link>
				</nav>
			</header>
		);
	}
}
