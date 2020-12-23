import navUrl1 from '../../images/connent/icon_5.png';
import navUrl2 from '../../images/connent/icon_2.png';
import navUrl3 from '../../images/connent/icon_3.png';
import navUrl4 from '../../images/connent/icon_4.png';
import navUrl5 from '../../images/connent/icon_6.png';
import navUrl6 from '../../images/connent/icon_1.png';

import React, { lazy, Suspense } from 'react';
import './home.scss';
import { Icon } from 'antd';

class Home extends React.Component {
	state = {
		cartList: [{
			allnum: '4895',
			stitle: '扫描项目',
			number: '696',
			icon: navUrl1
		}, {
			allnum: '6968',
			stitle: '扫描次数',
			number: '696',
			icon: navUrl2
		}, {
			allnum: '6968890',
			stitle: '代码行数',
			number: '696',
			icon: navUrl3
		}],

		charList: [{
			allnum: '4895',
			stitle: '正在扫描',
			icon: navUrl4
		}, {
			allnum: '6968',
			stitle: '排队等候',
			icon: navUrl5
		}, {
			allnum: '6968890',
			stitle: '剩余并发',
			icon: navUrl6
		}]
	};

	render() {
		return (
			<div className="home-warp">
				<div className="content-tips">DMSCA近7日扫描概况</div>
				<div className="cart-list">
					{
						this.state.cartList.map((item) => {
							return (
								<div className="cart-item" key={item.title}>
									<div className="cart-item-stitle">{item.stitle}</div>
									<div className="cart-item-list">
										<div className="cart-item-nav">
											<img className="cart-item-img" src={item.icon} />
										</div>
										<div className="cart-item-content">
											<div className="number">{item.allnum}</div>
											<div className="slash">/</div>
											<div className="title">{item.number}↑</div>
										</div>
									</div>
								</div>
							);
						})
					}
				</div>

				<div className="content-tips">DMSCA近7日扫描漏洞概况</div>
				<div className="user-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle">总漏洞分布</div>
						<div className="chart-item-content"></div>
					</div>
					<div className="user-chart-list">
						<div className="chart-item-stitle">近7日漏洞分布</div>
						<div className="chart-item-content"></div>
					</div>
				</div>

				<div className="content-tips">近7日主要漏洞趋势</div>
				<div className="user-chart user-bug">
					<div className="user-chart-list">
					</div>
				</div>

				<div className="content-tips">DMSCA当前运行状态 
					<span>运行状态（当前总并发资源数4）</span>
				</div>
				<div className="cart-list">
					{
						this.state.charList.map((item) => {
							return (
								<div className="cart-item" key={item.title}>
									<div className="cart-item-stitle">{item.stitle}</div>
									<div className="cart-item-list">
										<div className="cart-item-nav">
											<img className="cart-item-img" src={item.icon} />
										</div>
										<div className="cart-item-content">
											<div className="number">{item.allnum}</div>
										</div>
									</div>
								</div>
							);
						})
					}
				</div>

				<div className="content-tips">DMSCA当前运行状态 </div>
				<div className="user-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle"></div>
						<div className="chart-item-content"></div>
					</div>
					<div className="user-chart-list">
						<div className="chart-item-stitle"></div>
						<div className="chart-item-content"></div>
					</div>
					<div className="user-chart-list">
						<div className="chart-item-stitle"></div>
						<div className="chart-item-content"></div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
