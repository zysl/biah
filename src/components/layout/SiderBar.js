import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd';
import menuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuList: [],
      defaultOpenKeys: [],       // 默认展开
      defaultSelectedKeys: ['/'],   // 默认选中
      selectedKeys: '/'
    };
    SiderBar.that = this;
  }

  componentWillMount() {
    this.handleDefaultSelect();
    const menuList = this.setMenu(menuConfig);
    this.setState({
      menuList
    });
  }

  // 刷新页面，处理默认选中
  handleDefaultSelect = () => {
    let menuConfigKeys = [];
    menuConfig.forEach((item) => {
      menuConfigKeys.push(item.key);
    });
    const pathname = window.location.pathname;
    const currentKey = '/' + pathname.split('/')[1];
    const titleArray = this.selectBreadcrumb(currentKey, pathname);
    if (menuConfigKeys.indexOf(currentKey) === 1) {
      this.setState({
        defaultOpenKeys: [currentKey],
        defaultSelectedKeys: [pathname],
      });
      this.props.handleClick(titleArray);
    }
  };

  // 处理菜单列表
  setMenu = (menu, pItem) => {
    const { selectedKeys } = this.state;
    return menu.map((item) => {
      // console.log(item.key, selectedKeys)
      let isSelected = item.key === selectedKeys;
      return (
        <Menu.Item title={ item.title } key={ item.key } pitem={ pItem }>
          <NavLink to={ item.key } >
            <img className="sider_icon" src={isSelected ? item.iconSelect : item.icon} alt=''/>
            <span>{ item.title }</span>
          </NavLink>
        </Menu.Item>
      )
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
    const titleArray = SiderBar.that.selectBreadcrumb(currentKey, pathname);
    this.props.handleClick(titleArray);
    this.setState({
      selectedKeys: item.key
    })
  };

  render() {
    let name;
    return (
      <Sider>
        <div className="logo">
        </div>
        <Menu onClick={ this.handleClick } theme="light"
              defaultOpenKeys={ this.state.defaultOpenKeys }
              defaultSelectedKeys={ this.state.defaultSelectedKeys }
              mode="inline">
          { this.setMenu(menuConfig) }
        </Menu>
      </Sider>
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

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
