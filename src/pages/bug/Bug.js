import React, { lazy, Suspense } from 'react';
import { Icon,Table } from 'antd';
import iconExcel from '../../images/icon_excel.png';
import up from '../../images/up.png';
import iconCanlar from '../../images/icon_canlar.png';
import pdfurl from '../../images/pdf.png';
import '../home/home.scss';
import './bug.scss';

const StSelect = lazy(() => import('../../components/select/select'));

const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        tags: ['loser'],
        ellipsis: true,
        all:300
    },
    {
        key: '2',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        tags: ['loser'],
        ellipsis: true,
        all:300
    },
    {
        key: '3',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        tags: ['loser'],
        ellipsis: true,
        all:300
    },
];

class Home extends React.Component {

	render() {
		return (
			<div className="home-warp">
				<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">DMSCA项目漏洞分析</div>
						<div className="chart-item-content common-content">
							<div className="common-content-nav">
								<span>全部语言</span>
								<div className="input">
								<StSelect></StSelect>
								</div>
							</div>

							<div className="common-content-nav">
								<span>项目名称</span>
								<div className="input">
								<StSelect></StSelect>
								</div>
							</div>

							<div className="common-content-nav">
								<span>风险等级</span>
								<div className="input">
								<StSelect></StSelect>
								</div>
							</div>

							<div className="common-content-nav">
								<span>全部漏洞类型</span>
								<div className="input">
									<StSelect></StSelect>
								</div>
							</div>

							<div className="common-content-nav">
								<span>计划完成月份</span>
								<div className="input can">
									<input placeholder="请选择日期" data-index="3" readOnly onClick={this.handleClick}/>
									<img className="img_up_down iconCanlar" src={iconCanlar}/>
								</div>
							</div>

							<div className="common-content-nav check">
								<span className="select_tips">分析审计记录</span>
							</div>
						</div>
						<div className="other-operate">
							<button>立即分析</button>
							<button><img className="pdf" src={pdfurl} />导出pdf</button>
						</div>
						<div className="chart-item-stitle all-title">查询条件</div>
						<div className="chart-item-content pd50">
							<Table dataSource={data} pagination={false} showHeader={false}> 
								<Column align="center" className="table_white" title="序号" dataIndex="key" key="key" />
                				<Column align="left"  ellipsis title="团队名称" dataIndex="team" key="team" />
							</Table>
						</div>
					</div>
				</div>

        		<div className="user-chart all-chart">
					<div className="user-chart-list">
						<div className="chart-item-stitle all-title">审计记录<img className="all-right" src={iconExcel} /></div>
						<div className="chart-item-content">
							
						</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
