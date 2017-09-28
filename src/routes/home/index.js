import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<div className={style.title}>
					{'⎡414基金会⎦会费明细'}
				</div>
				<div className={style.tableHeader}>
					<div>{'日期'}</div>
					<div>{'支出/收入'}</div>
					<div>{'余额'}</div>
				</div>
				<div className={style.cell}>
					<div>{'2017-19-23'}</div>
					<div>{'- ￥480'}</div>
					<div>{'￥900'}</div>
				</div>
				<div className={style.cell}>
					<div>{'2017-19-23'}</div>
					<div>{'0'}</div>
					<div>{'￥420'}</div>
				</div>
				<div className={style.cell}>
					<div>{'2017-19-23'}</div>
					<div>{'-￥420'}</div>
					<div>{'￥0'}</div>
				</div>
			</div>
		);
	}
}
