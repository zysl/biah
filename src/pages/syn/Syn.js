import React, { lazy, Suspense } from 'react';
import '../home/home.scss';
import { Icon,Button } from 'antd';
const FormBasic = lazy(() => import('../../components/form/form'));


class Home extends React.Component {

	onPressLearnMore() {
		console.log('aaaa')
	}

	render() {
		return (
			<div className="home-warp">
				<FormBasic></FormBasic>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
