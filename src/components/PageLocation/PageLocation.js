import React, { lazy, Suspense } from 'react';
import { Menu, Breadcrumb, Layout } from 'antd';
import { connect } from 'react-redux';
import menuConfig from '../../config/menuConfig';
import './PageLocation.scss';


class PageLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleArray: []
        };
    }

    componentWillMount() {
        const { match: { path } } = this.props;
        let titleArray = this.selectBreadcrumb(menuConfig, path);
        this.setState({
            titleArray
        })
    }

    // 导出出面包屑数组
    selectBreadcrumb = (data, pathname) => {
        const titleArray = [];
        data.map((item, idx) => {
            if (item.key === pathname) {
                titleArray.push(item.title);
            } else if (item.key.indexOf(pathname) > -1) {
                if (item.children) {
                    this.selectBreadcrumb(item.children, pathname);
                }
            } else if (item.children) {
                this.selectBreadcrumb(item.children, pathname);
            }

        });
        return titleArray;
    };

    backIconClick = () => {
        const { backHandle, history } = this.props;
        if (backHandle) {
            backHandle();
        } else {
            history.goBack();
        }
    };


    render() {
        const { titleArray } = this.state;
        return (
            <div className="page-location-wrapper">
                <div className={'location-content'}>
                    <div className={'back-icon'} onClick={() => this.backIconClick()}/>
                    <Breadcrumb>
                        {
                            titleArray && titleArray.length > 0 && titleArray.map((item, idx) => (
                                <Breadcrumb.Item key={`bread-item-${idx}`}>
                                    <span className={(idx+1) === titleArray.length ? 'normal' : 'last'}>{item}</span>
                                    {idx > 0 && <span className={'normal'}>/</span>}
                                </Breadcrumb.Item>
                            ))
                        }

                    </Breadcrumb>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageLocation);
