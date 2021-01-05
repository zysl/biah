import React, { lazy, Suspense } from 'react';
import '../home/home.scss';
import '../all/all.scss';
import searchUrl from '../../images/search.png'
import { Icon,Button } from 'antd';
const TableDtb = lazy(() => import('../../components/table/table'));
const StSelect = lazy(() => import('../../components/select/select'));


class Home extends React.Component {

	onPressLearnMore() {
		console.log('aaaa')
	}

	render() {
		return (
			<div className="home-warp">
				<div className="user-chart all-chart">
					<div className="user-chart-list">	
						<div className="chart-item-content">
							<div className="operate">
								<Button  type="primary" className="creat">新 建</Button>
								<div className="operate_search">
									<img className="iconCanlar" src={searchUrl}/>
									<input placeholder="搜索"/>
								</div>
							</div>
							<TableDtb></TableDtb>
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
