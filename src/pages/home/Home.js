<<<<<<< HEAD
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
=======
import React, { lazy, Suspense } from 'react';
import './home.scss';
import { Divider, Alert, Steps } from 'antd';

import SecondNav from '../../components/SecondNav/SecondNav';
import ThirdNav from '../../components/ThirdNav/ThirdNav';
import PageLocation from '../../components/PageLocation/PageLocation';
import FlowStep from '../../components/FlowStep/FlowStep';

const { Step } = Steps;

function VerticalStepTitle(props) {
    return (
        <div className={'vertical-step-item-title'}>
            <span className={'title-txt'}>{props.title}</span>
            {props.extra}
        </div>
    )
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            stepList: [
				{
                    title: '张三',
                    desc: '销售代表',
                    time: '2020-10-19',
                    extraContent: '提交HCA修改申请'
				},
                {
                    title: '张永',
                    desc: '大区经',
                    time: '2020-10-19',
                    extraContent: '审核通过'
                },
                {
                    title: '一三',
                    desc: '销售代表',
                    extraContent: '审核中'
                },
                {
                    title: '一三',
                    desc: '销售代表',
                    extraContent: '审核中'
                },
                {
                    title: '一三',
                    desc: '销售代表',
                    extraContent: '审核中'
                },
			]
		};
	}

	render() {
		const { stepList } = this.state;
		return (
			<div className="home-warp">
				<SecondNav/>
                <Divider>分割线</Divider>
				<ThirdNav/>
                <Divider>分割线</Divider>
				<PageLocation {...this.props}/>
                <Divider>分割线</Divider>
				<Alert message="Veeva 系统开户成功后，才能申请 GBS 系统开户。"
					   type="info"
					   showIcon
					   icon={<i className={'icon-tip'}/>}
                       // action={<span className={'alert-extra-txt'}>不再显示</span>}
                       closeText={<div><span className={'alert-extra-txt'}>不再显示</span><span className={'alert-extra-txt'}>关闭</span></div>}
				/>
                <Divider>分割线</Divider>
				<FlowStep stepList={stepList} current={3}/>
                <Divider>分割线</Divider>
                <div className={'vertical-steps-wrap'}>
                    <Steps progressDot current={2} direction="vertical">
                        <Step title={
                            <VerticalStepTitle
                                title={'Veeva客户资料修改'}
                                extra={<span className={'extra-txt yellow'}>已驳回 <i className={'icon-arrow'}/></span>}
                            />}
                              description={<FlowStep stepList={stepList} current={3}/>}
                        />
                        <Step title={
                            <VerticalStepTitle
                                title={'Veeva客户资料修改'}
                                extra={<span className={'extra-txt red'}>已驳回 <i className={'icon-arrow'}/></span>}
                            />}
                              description={<FlowStep stepList={stepList} current={2}/>}
                        />
                        <Step title={
                            <VerticalStepTitle
                                title={'Veeva客户资料修改'}
                                extra={<span className={'extra-txt blue'}>已驳回 <i className={'icon-arrow'}/></span>}
                            />}
                              description={<FlowStep stepList={stepList} current={1}/>}
                        />
                    </Steps>
                </div>
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
