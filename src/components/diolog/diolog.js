import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Dropdown, Icon, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import closeUrl from '../../images/close.svg'
import noData from '../../images/no_data.png'
import './diolog.scss';

// const {showDetailFlag} = true;
// const {isShowNodata} = false;
const StDiolog = (props) => {
  return (
    <div className="show">
        {/* <div className="mask"> */}
            {/* <div className="diolog">
                <div className="diolog-title">
                    <span>温馨提示</span>
                    <img src={closeUrl} />
                </div>
                <div className="content">
                    <span>该操作需要较长的时间，是否继续？期间可点击【取消同步】按钮取消同步</span>    
                    <button>继续</button>         
                </div>
            </div> */}
            {/* <div className="diolog no-data">
                <div className="diolog-title">
                    <span>温馨提示</span>
                    <img src={closeUrl} />
                </div>
                <div className="content">
                    <img className="nodata" src={noData} />
                    <span>暂无记录</span>       
                </div>
            </div> */}
        {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(StDiolog);
