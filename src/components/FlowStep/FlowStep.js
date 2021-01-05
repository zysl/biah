import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
import './FlowStep.scss';

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
        const { stepList, current } = this.props;
        return (
            <div className="flow-step-wrapper">
                {
                    stepList && stepList.length > 0 && stepList.map((item, idx) => (
                        <div className={'step-item'}>
                            <div className={'step-item-title'}>
                                <div className={'title'}>{item.title}</div>
                                <div className={'desc'}>{item.desc}</div>
                            </div>
                            <div className={'step-item-tail'}>
                                <div className={'step-dot'} style={ idx <= current ? {backgroundColor: '#003366'} : {backgroundColor: '#E9E9E9'}}/>
                                {
                                    (idx + 1) < stepList.length &&
                                    <div className={'step-line'} style={ idx <= current - 1 ? {backgroundColor: '#003366'} : {backgroundColor: '#E9E9E9'}}/>
                                }
                            </div>
                            <div className={'step-item-extra-content'}>
                                {
                                    item.time && <div className={'time'}>{item.time}</div>
                                }
                                {
                                    item.extraContent && <div className={'extra-content'}>{item.extraContent}</div>
                                }
                            </div>
                        </div>
                    ))
                }
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
