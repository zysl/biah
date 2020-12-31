import React, { lazy, Suspense } from 'react';
import './home.scss';
import { Divider, Alert, Steps } from 'antd';

import SecondNav from '../../components/SecondNav/SecondNav';
import ThirdNav from '../../components/ThirdNav/ThirdNav';
import PageLocation from '../../components/PageLocation/PageLocation';
import FlowStep from '../../components/FlowStep/FlowStep';

const { Step } = Steps;

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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
                <Steps progressDot current={1}>
                    <Step title="Finished" description="You can hover on the dot." />
                    <Step title="In Progress" description="You can hover on the dot." />
                    {/*<Step title="Waiting" description="You can hover on the dot." />*/}
                    {/*<Step title="Waiting" description="You can hover on the dot." />*/}
                </Steps>
                <Divider>分割线</Divider>
				<FlowStep/>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
