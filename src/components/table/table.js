import React, { lazy, Suspense } from 'react';
import { Table, Divider, Tag,Pagination } from 'antd';
import { connect } from 'react-redux';
import imgleftUrl from '../../images/left.svg'
import imgUpUrl from '../../images/down.png'
import selectedUrl from '../../images/checked.png';
import './table.scss';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        ellipsis: true,
        all:300
    },
    {
        key: '2',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        ellipsis: true,
        all:300
    },
    {
        key: '3',
        firstName: '10',
        lastName: '11',
        last1Name: '21',
        team: '团队1',
        time: '2020-10-10 10:00',
        ada: '项目1',
        line: 123123,
        ellipsis: true,
        all:300
    },
];

const { easyTab } = false; 

const TableDtb = (props) => {
    return (
        <div>
            <div className="nav_list">
                <div className="common-content-nav check">
                    <img src={selectedUrl}/>
                    <span className="select_tips">新增</span>
                </div>
                <div className="common-content-nav check">
                    <img src={selectedUrl}/>
                    <span className="select_tips">复发</span>
                </div>
                <div className="common-content-nav check">
                    <img src={selectedUrl}/>
                    <span className="select_tips">修复</span>
                </div>
            </div>
            
            {/* <Table dataSource={data} pagination={false}>
                <Column align="center" className="table_white table1" title="序号" dataIndex="key" key="key" />
                <Column align="center" className="table_white table2"  ellipsis title="团队名称" dataIndex="team" key="team" />
                <Column align="center" className="table_white"  title="项目名称" dataIndex="ada" key="ada" />
                <Column align="center" className="table_white table3"  title="扫描时间" dataIndex="time" key="time" />
                <Column align="center" className="table_white"  title="代码行" dataIndex="line" key="line" />
                <ColumnGroup title="高风险" className="table_white hight">
                    <Column align="center" className="table_white high_a" title="新增" dataIndex="firstName" key="firstName" />
                    <Column align="center" className="table_white high_f" title="高发" dataIndex="lastName" key="lastName" />
                    <Column align="center" className="table_white high_x" title="修复" dataIndex="last1Name" key="last1Name" />
                </ColumnGroup>
                <ColumnGroup title="中风险" className="table_white yellow">
                    <Column align="center" className="table_white high_a" title="新增" dataIndex="firstName" key="firstName" />
                    <Column align="center" className="table_white high_f" title="高发" dataIndex="lastName" key="lastName" />
                    <Column align="center" className="table_white high_x" title="修复" dataIndex="last1Name" key="last1Name" />
                </ColumnGroup>
                <ColumnGroup title="低风险" className="table_white green">
                    <Column align="center" className="table_white high_a" title="新增" dataIndex="firstName" key="firstName" />
                    <Column align="center" className="table_white high_f" title="高发" dataIndex="lastName" key="lastName" />
                    <Column align="center" className="table_white high_x" title="修复" dataIndex="last1Name" key="last1Name" />
                </ColumnGroup>
                <ColumnGroup title="信息提示" className="table_white blue">
                    <Column align="center" className="table_white high_a" title="新增" dataIndex="firstName" key="firstName" />
                    <Column align="center" className="table_white high_f" title="高发" dataIndex="lastName" key="lastName" />
                    <Column align="center" className="table_white high_x" title="修复" dataIndex="last1Name" key="last1Name" />
                </ColumnGroup>
                <Column align="center" className="table_white"  title="总数" dataIndex="all" key="all" />
            </Table> */}

            <Table dataSource={data} pagination={false}>
                <Column align="center" className="table_blue" title="序号" dataIndex="key" key="key" />
                <Column align="center" className="table_blue"  ellipsis title="团队名称" dataIndex="team" key="team" />
                <Column align="center" className="table_blue"  title="项目名称" dataIndex="ada" key="ada" />
                <Column align="center" className="table_blue"  title="扫描时间" dataIndex="time" key="time" />
                <Column align="center" className="table_blue"  title="代码行" dataIndex="line" key="line" />
                <Column align="center" className="table_blue"  title="扫描时间" dataIndex="time" key="time" />
                <Column align="center" className="table_blue"  title="代码行" dataIndex="line" key="line" />
                <Column align="center" className="table_blue"  title="扫描时间" dataIndex="time" key="time" />
                <Column align="center" className="table_blue"  title="代码行" dataIndex="line" key="line" />
                <Column align="center" className="table_blue"  title="总数" dataIndex="all" key="all" />
            </Table>
            <div className="pagination">
                <div className="pagination_left">
                    <span>显示第1到第2条记录，总共2条记录 每页显示</span>
                    <div className="next_prev">
                        <input type="text"></input>
                        <div className="next"><img src={imgUpUrl} /></div>
                    </div>
                    <span>条记录</span>
                </div>
                <div className="pagination_right">
                    <span>跳转到</span>
                    <input type="text"/> 
                    <span>页</span>

                    <div className="next_prev">
                        <div className="prev"><img src={imgleftUrl} /></div>
                        <input type="text"></input>
                        <div className="next"><img src={imgleftUrl} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps)(TableDtb);
