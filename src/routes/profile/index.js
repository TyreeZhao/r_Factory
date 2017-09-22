import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<p> YunHui Zeng 大曾 </p>
				<p> YiHang Sun 航兄 </p>
				<p> PingYu Liu 平鱼 </p>
				<p> Qi Song 宋琦 </p>
				<p> Yan Zheng 岩总 </p>
				<p> Feng Xue 薛神 </p>
				<p> Nan Wang 楠锅 </p>
				<p> He Liu 主席 </p>
				<p> Tong Zhao 佟 </p>
				<p> YiFan Sun ivan </p>
				<p> Song Mu 松哥 </p>
			</div>
		);
	}
}
