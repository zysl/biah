import React, { lazy, Suspense } from 'react';
import '../home/home.scss';
import { Icon,Button } from 'antd';
const StDiolog = lazy(() => import('../../components/diolog/diolog'));


class Home extends React.Component {

	onPressLearnMore() {
		console.log('aaaa')
	}

	render() {
		return (
			<div className="home-warp">
				<StDiolog></StDiolog>
			</div>
		);
	}

	componentDidMount() {

	}

}

export default Home
