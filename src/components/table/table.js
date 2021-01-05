import React, { lazy, Suspense } from 'react';
<<<<<<< HEAD
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
=======
import { connect } from 'react-redux';
import zhCN from 'antd/es/locale/zh_CN'; 
import { Table, ConfigProvider,Icon, Switch, Radio, Form, Divider,Pagination } from 'antd';
import './table.scss';

const columns = [
    {
      title: 'CDP ID',
      dataIndex: 'CDPID',
      key: 'CDPID',
      render: text => <a className="title">{text}<Icon type="caret-down" /></a>,
    },
    {
      title: '公司名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '属性',
      dataIndex: 'param',
      key: 'param',
      sorter: (a, b) => a.param - b.param,
    },
    {
      title: '物种分类',
      dataIndex: 'class',
      key: 'class',
      sorter: (a, b) => a.class - b.class,
    },
    {
      title: '客户类型',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type - b.type,
    },
    {
      title: 'KA',
      dataIndex: 'KA',
      key: 'KA',
      sorter: (a, b) => a.KA - b.KA,
    },
    {
      title: 'Veeva ID',
      dataIndex: 'VeevaID',
      key: 'VeevaID',
    },
    {
      title: 'GBS ID',
      dataIndex: 'GBSID',
      key: 'GBSID',
    },
    {
      title: 'Veeva 状态',
      dataIndex: 'Veeva',
      key: 'Veeva',
      sorter: (a, b) => a.Veeva - b.Veeva,
      render: text => <a className={text == 1?'red':text == 1?'blue':'gray'}></a>,
    },
    {
      title: 'GBS 状态',
      dataIndex: 'GBS',
      key: 'GBS',
      sorter: (a, b) => a.GBS - b.GBS,
      render: text => <a className={text == 1?'red':text == 1?'blue':'gray'}></a>,
    },
    {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span>
          <a className="h_link">查看</a>
          <a className="h_link">编辑</a>
          <a className="h_link">审批记录</a>
          <a className="h_link">操作日志</a>
        </span>
      ),
    },
  ];
  
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      CDPID: i,
      name: 'John Brown',
      key: `${i}2`,
      param: '1',
      class:'家禽',
      type: '直销客户',
      KA:"是/否",
      VeevaID:'123123',
      GBSID:'q13',
      Veeva:1,
      GBS:2,
      address: `New York No. ${i} Lake Park`,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  
  const expandedRowRender = record => <p>{record.description}</p>;
  const title = () => 'Here is title';
  const showHeader = true;
  const scroll = { y: 240 };

  
  class TableDtb extends React.Component {
    state = {
      bordered: false,
      loading: false,
      size: 'default',
      // expandedRowRender,
      title: undefined,
      showHeader,
      rowSelection: {},
      hasData: true,
      tableLayout: undefined,
      pagination:false
    };

    status = {
      local:zhCN
    }
  
    handleToggle = prop => enable => {
      this.setState({ [prop]: enable });
    };
  
    handleSizeChange = e => {
      this.setState({ size: e.target.value });
    };
  
    handleTableLayoutChange = e => {
      this.setState({ tableLayout: e.target.value });
    };
  
    handleExpandChange = enable => {
      this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
    };
  
    handleEllipsisChange = enable => {
      this.setState({ ellipsis: enable });
    };
  
    handleTitleChange = enable => {
      this.setState({ title: enable ? title : undefined });
    };
  
    handleHeaderChange = enable => {
      this.setState({ showHeader: enable ? showHeader : false });
    };

    handleRowSelectionChange = enable => {
      this.setState({ rowSelection: enable ? {} : undefined });
    };
  
    handleScollChange = enable => {
      this.setState({ scroll: enable ? scroll : undefined });
    };
  
    handleDataChange = hasData => {
      this.setState({ hasData });
    };
  
    // handlePaginationChange = e => {
    //   const { value } = e.target;
    //   this.setState({
    //     pagination: value === 'none' ? false : { position: value },
    //   });
    // };
  
    render() {
      const { state } = this;
      const { local } = this.status;
      return (
        <ConfigProvider local={local}>
        <div>
          <Table
            {...this.state}
            columns={columns.map(item => ({ ...item, ellipsis: state. ellipsis }))}
            dataSource={state.hasData ? data : null}
          />
          <div className="pagination">
            <div className="pagination_left">
              <span className="btn">批量关闭</span>
              <span className="btn">批量导出</span>
            </div>
            <div className="pagination_right">
              <span className="tips">共1,223条记录，当前为1-10条</span>
              <Pagination total={50} showSizeChanger showQuickJumper />
            </div>
          </div>
        </div>
        </ConfigProvider>
      );
    }
  }
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps)(TableDtb);
