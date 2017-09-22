import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	state = {
		time: Date.now(),
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};
	render({ }, { time }) {
		return (
			<header class={style.header}>
				<h1>{'4⃣️1⃣️4⃣️ 基金会'}</h1>
				<nav>
					{/*
						<Link activeClassName={style.active} href="/profile">profile</Link>
						<Link activeClassName={style.active} href="/profile/john">users</Link>
					*/}
					<Link activeClassName={style.active} href="/">Finance</Link>
					<Link activeClassName={style.active} href="/profile">Members</Link>
				</nav>
				<div className={style.time}>{new Date(time).toLocaleString()}</div>
			</header>
		);
	}
}
