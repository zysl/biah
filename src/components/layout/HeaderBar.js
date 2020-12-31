import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
import './header.scss';

import logoURL from '../../images/logo.jpg';
import imgRefresh from '../../images/refresh.svg'

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Header } = Layout;

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            menuList: [],
            defaultOpenKeys: [],       // 默认展开
            defaultSelectedKeys: ['/'],   // 默认选中
            selectedKeys: ['/syn']
        };
        // HeaderBar.that = this;
    }

    componentWillMount() {
        this.handleDefaultSelect();
    }

    // 刷新页面，处理默认选中
    handleDefaultSelect = () => {
        let menuConfigKeys = [];
        menuConfig.forEach((item) => {
            if (item.children && item.children.length > 0) {
                item.children.map((_sItem) => {
                    menuConfigKeys.push(_sItem.key);
                })
            }
            menuConfigKeys.push(item.key);
        });
        const pathname = window.location.pathname;
        const currentKey = '/' + pathname.split('/')[1];
        const titleArray = this.selectBreadcrumb(currentKey, pathname);
        if (menuConfigKeys.indexOf(currentKey) > -1) {
            this.setState({
                defaultOpenKeys: [currentKey],
                selectedKeys: [pathname],
            });
            this.props.handleClick(titleArray);
        }
    };

    // 处理菜单列表
    setMenu = (menu, pItem) => {
        const { selectedKeys } = this.state;
        return menu.map((item, index) => {
            // console.log(item.key, selectedKeys)
            let isSelected = item.key === selectedKeys;
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={`SubMenu-${index}`} title={item.title} popupClassName={'header-sub-menu-wrapper'}>
                        {
                            item.children.map((subItem, idx) => (
                                <Menu.Item title={subItem.key} key={subItem.key}>
                                    <NavLink to={subItem.key} >
                                        <span>{subItem.title}</span>
                                    </NavLink>
                                </Menu.Item>
                            ))
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item title={item.title} key={item.key} pitem={pItem}>
                        <NavLink to={item.key} >
                            <span>{item.title}</span>
                        </NavLink>
                    </Menu.Item>
                )
            }
        });
    };

    // 导出出面包屑数组
    selectBreadcrumb = (currentKey, pathname) => {
        const titleArray = [];
        menuConfig.forEach((item) => {
            if (item.key === currentKey) {
                titleArray.push(item.title);
            }
            if (item.children) {
                item.children.forEach((sItem) => {
                    if (sItem.key === pathname) {
                        titleArray.push(sItem.title);
                    }
                });
            }
        });
        return titleArray;
    };

    // 点击侧边栏
    handleClick = (item) => {
        const currentKey = '/' + item.key.split('/')[1];
        const pathname = item.key;
        // const titleArray = this.selectBreadcrumb(currentKey, pathname);
        // this.props.handleClick(titleArray);
        this.setState({
            selectedKeys: [item.key]
        })
    };

    render() {
        const { defaultOpenKeys, selectedKeys } = this.state;
        return (
            <div className="headBg">
                <div className={'header-logo'}>
                    {/*<img src={logoURL}/>*/}
                </div>
                <Menu onClick={ this.handleClick }
                      // defaultOpenKeys={ defaultOpenKeys }
                      selectedKeys={ selectedKeys }
                      theme="light"
                      mode="horizontal">
                    { this.setMenu(menuConfig) }
                </Menu>
                <div className={'setting-wrapper'}>
                    <div className={'notice-icon icon'}/>
                    <div className={'question-icon icon'}/>
                    <div className={'setting-icon icon'}/>
                    <div className={'user-icon icon'}/>
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
        handleClick(titleArray) {
            dispatch(switchMenu(titleArray));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
