import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Dropdown, Icon, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import imgRefresh from '../../images/refresh.svg'
import './header.scss';
const StDiolog = lazy(() => import('../../components/diolog/diolog'));

const { Header } = Layout;

const HeaderBar = (props) => {
  	return (
		<Header>
			<div className="headBg">
				<StDiolog></StDiolog>
				<div className="refresh">
					<img className="refresh-img" src={imgRefresh}/>
					<span className="refresh-tips">数据源每日03:00:00更新，</span>
					<span className="refresh-tips tips-other">最近一次数据同步于2020年06月22日14:51</span>
					<span className="refresh-tips">，如数据已发生变化需要立即更新，请点击“立即同步”</span>    
					<button className="refresh-btn">立即同步</button>         
				</div> 
			</div> 
		</Header>
  	);
};

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(HeaderBar);
