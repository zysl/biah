import iconExcel from '../../images/icon_excel.png';
import iconCanlar from '../../images/icon_canlar.png';
import synB from '../../images/syn_b.svg';
import down from '../../images/down.png';
import up from '../../images/up.png';

import React, { lazy, Suspense } from 'react';
import '../home/home.scss';
import { Icon,Select } from 'antd';
const { Option } = Select;
const CalendarDtb = lazy(() => import('../../components/calendar/calendar'));
function handleChange(value) {
console.log(`selected ${value}`);
}

class Syn extends React.Component {

	render() {
		return (
			<div className="home-warp">
				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">同步管理</div>
						<div className="chart-item-content common-content">
							<div className="common-content-nav">
								<span>日期选择</span>
								<div className="input can">
									<input placeholder="请选择日期" data-index="3" readOnly onClick={this.handleClick}/>
									<img className="img_up_down iconCanlar" src={iconCanlar}/>
								</div>
							</div>
							<div className="other-operate syn-operate">
								<button>立即同步</button>
								<button>全部同步</button>
								<button className="synbtn"><img className="synb" src={synB} />刷新同步记录</button>
							</div>
						</div>
						
					</div>
				</div>

        		<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title syn-title">历史数据同步结果记录 <button>返回今日</button></div>
						<div className="chart-item-content common-content">
							<div className="common-content-nav syn-select">
								<div className="input">
									<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="disabled" disabled>
											Disabled
										</Option>
										<Option value="Yiminghe">yiminghe</Option>
									</Select>
									{/* <input placeholder="2020年" data-index="1" readOnly onClick={this.handleClick}/>
									<img className="img_up_down" src={down}/> */}
								</div>
							</div>

							<div className="common-content-nav syn-select">
								<div className="input">
									<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="disabled" disabled>
											Disabled
										</Option>
										<Option value="Yiminghe">yiminghe</Option>
									</Select>
									{/* <input placeholder="6月" data-index="2" readOnly onClick={this.handleClick}/>
									<img className="img_up_down" src={down}/> */}
								</div>
							</div>
						</div>
						<CalendarDtb></CalendarDtb>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Syn
