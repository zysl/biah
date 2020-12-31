import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
import './FlowStep.scss';

import logoURL from '../../images/logo.jpg';
import imgRefresh from '../../images/refresh.svg'

class FlowStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: []
        };
    }

    componentWillMount() {

    }

    render() {
        const { tabList } = this.props;
        return (
            <div className="flow-step-wrapper">
                <div className={'step-item'}>
                    <div className={'step-item-title'}>
                        <div className={'title'}>张三</div>
                        <div className={'desc'}>张三</div>
                    </div>
                    <div className={'step-item-tail'}>
                        <div className={'step-dot'}/>
                        <div className={'step-line'}/>
                    </div>
                    <div className={'step-item-extra-content'}>
                        <div className={'time'}>2019-02-12</div>
                        <div className={'desc'}>审批通过</div>
                    </div>
                </div>
                <div className={'step-item'}>
                    <div className={'step-item-title'}>
                        <div className={'title'}>张三</div>
                        <div className={'desc'}>张三</div>
                    </div>
                    <div className={'step-item-tail'}>
                        <div className={'step-dot'}/>
                        <div className={'step-line'}/>
                    </div>
                    <div className={'step-item-extra-content'}>
                        <div className={'time'}>2019-02-12</div>
                        <div className={'desc'}>审批通过</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowStep);
