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
                              description={<FlowStep stepList={stepList} current={3}/>}
                        />
                        <Step title={
                            <VerticalStepTitle
                                title={'Veeva客户资料修改'}
                                extra={<span className={'extra-txt blue'}>已驳回 <i className={'icon-arrow'}/></span>}
                            />}
                              description={<FlowStep stepList={stepList} current={3}/>}
                        />
                    </Steps>
                </div>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
