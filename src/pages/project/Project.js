import iconExcel from '../../images/icon_excel.png';
import down from '../../images/down.png';
import up from '../../images/up.png';
import iconCanlar from '../../images/icon_canlar.png';
import pdfurl from '../../images/pdf.png';
import selectUrl from '../../images/uncheck.png';
import React, { lazy, Suspense } from 'react';
import { Icon,Table } from 'antd';
import '../home/home.scss';

const StSelect = lazy(() => import('../../components/select/select'));

class Home extends React.Component {

	render() {
		return (
			<div className="home-warp">
				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">DMSCA项目分类标准分析</div>
						<div className="chart-item-content common-content">
							<div className="common-content-nav">
								<span>全部语言</span>
								<div className="input">
									<StSelect></StSelect>
									<img className="img_up_down" src={up}/>
								</div>
							</div>

							<div className="common-content-nav">
								<span>全部项目</span>
								<div className="input">
									<StSelect></StSelect>
									<img className="img_up_down" src={up}/>
								</div>
							</div>

							<div className="common-content-btn">
								<button className="selected">近一周</button>	
								<button>近一月</button>
								<button>近一季度</button>
								<button>近一年</button>
							</div>

							<div className="common-content-nav">
								<span>计划完成月份</span>
								<div className="input can">
									<input placeholder="请选择日期" data-index="3" readOnly onClick={this.handleClick}/>
									<img className="img_up_down iconCanlar" src={iconCanlar}/>
								</div>
							</div>

							<div className="common-content-nav check">
								<img src={selectUrl}/>
								<span className="select_tips">分析审计记录</span>
							</div>
						</div>
						<div className="other-operate">
							<button>立即分析</button>
							<button><img className="pdf" src={pdfurl} />导出pdf</button>
						</div>
						<div className="chart-item-stitle all-title">查询条件</div>
						<div className="chart-item-content"></div>
					</div>
				</div>

				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">汇总分析结果<img className="all-right" src={iconExcel} /></div>
						<div className="chart-item-content"></div>
					</div>
				</div>

				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">【jpetstore-6-mybatis-jpetstore-6.0.1】【PCI DSS v3.2】【近1年】漏洞汇总 <img className="all-right" src={iconExcel} /></div>
						<div className="chart-item-content"></div>
					</div>
				</div>

        <div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">【jpetstore-6-mybatis-jpetstore-6.0.1】【近1年】漏洞分析 <img className="all-right" src={iconExcel} /></div>
						<div className="chart-item-content"></div>
					</div>
				</div>

        <div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">审计状态<img className="all-right" src={iconExcel} /></div>
						<div className="chart-item-content"></div>
					</div>
				</div>

				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">汇总分析结果分布</div>
						<div className="chart-item-content"></div>
					</div>
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">按问题类型汇总分布</div>
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
