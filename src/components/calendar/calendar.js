import React, { lazy, Suspense } from 'react';
import { Table, Divider, Tag,Pagination } from 'antd';
import { connect } from 'react-redux';
import imgleftUrl from '../../images/left.svg'
import imgUpUrl from '../../images/down.png'
import selectedUrl from '../../images/checked.png';
import './calendar.scss';

const { Column, ColumnGroup } = Table;

const data = [
    {
        name1: '1',
        name2: '2',
        name3: '3',
        name4: '4',
        name5: '5',
        name6: '6',
        name7: {
            name:7,
            tag:1
        },
    },
    {
        name1: '8',
        name2: '9',
        name3: '10',
        name4: '11',
        name5: '12',
        name6: '13',
        name7: {
            name:14,
            tag:2
        },
    },
    {
        name1: '15',
        name2: '16',
        name3: '17',
        name4: '18',
        name5: '19',
        name6: '20',
        name7: {
            name:21,
            tag:3
        },
    },
    {
        name1: '22',
        name2: '23',
        name3: '24',
        name4: '25',
        name5: '26',
        name6: '27',
        name7: {
            name:28,
            tag:3
        },
    },
    {
        name1: '29',
        name2: '30',
        name3: '31',
        name4: '',
        name5: '',
        name6: '',
        name7: '',
    }
];

const { easyTab } = false; 

const CalendarDtb = (props) => {
    return (
        <div className="main">
            <Table className="table_calendar" dataSource={data} pagination={false}>
                <Column align="center" className="table_blue" title="一" dataIndex="name1" key="name1" />
                <Column align="center" className="table_blue" title="二" dataIndex="name2" key="name2" />
                <Column align="center" className="table_blue" title="三" dataIndex="name3" key="name3" />
                <Column align="center" className="table_blue" title="四" dataIndex="name4" key="name4" />
                <Column align="center" className="table_blue" title="五" dataIndex="name5" key="name5" />
                <Column align="center" className="table_blue" title="六" dataIndex="name6" key="name6" />
                <Column align="center" className="table_blue" title="日" dataIndex="name7" key="name7"
                render={name7 => (
                <div className="hname"><span>{name7.name}</span>
                    {
                    name7.tag == 1?<em className="success"></em>:name7.tag == 2?<em className="ing"></em>:name7.tag == 3?<em></em>:''
                    }</div>
                )} />
            </Table>

            <div className="ull">
                <ul>
                    <li className="ul_li">
                        <em></em>
                        <span>失败</span>
                    </li>
                    <li className="ul_li">
                        <em className="ing"></em>
                        <span className="ing">进行中</span>
                    </li>
                    <li className="ul_li">
                        <em className="success"></em>
                        <span className="success">成功</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps)(CalendarDtb);
