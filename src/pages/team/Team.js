import React, { lazy, Suspense } from 'react';
import '../home/home.scss';
import { Icon,Button } from 'antd';
const StepForm = lazy(() => import('../../components/stepForm/stepForm'));


class Home extends React.Component {

	onPressLearnMore() {
		console.log('aaaa')
	}

	render() {
		return (
			<div className="home-warp">
				<StepForm></StepForm>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
