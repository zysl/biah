import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
import './ThirdNav.scss';

import imgRefresh from '../../images/refresh.svg'

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Header } = Layout;

class ThirdNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: []
        };
    }

    componentWillMount() {
        let data = this.props.tabList || [{
            text: '客户信息一览',
            key: 1,
            selected: true
        }, {
            text: 'Veeva系统资料',
            key: 2
        }, {
            text: 'GBS系统资料',
            key: 3
        }];
        if (data.filter((obj) => obj.selected).length < 1) {
            data[0].selected = true
        }
        this.setState({
            tabList: data
        })
    }

    switchTabHandle = (item) => {
        if (item.selected) {
            return;
        }
        let { tabList } = this.state;
        const { tabChangeHandle } = this.props;
        tabList.map((obj, idx) => {
            obj.selected = (obj.key === item.key);
        });
        this.setState({
            tabList
        }, () => {
            tabChangeHandle && tabChangeHandle(tabList, item);
        });
    };

    render() {
        const { tabList } = this.state;
        return (
            <div className="third-nav-wrapper">
                <div className={'tab-list-wrap'}>
                    {
                        tabList && tabList.length > 0 && tabList.map((item, idx) => (
                            <div className={item.selected ? 'tab-item selected' : 'tab-item'} key={item.key} onClick={() => this.switchTabHandle(item)}>{item.text}</div>
                        ))
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ThirdNav);
