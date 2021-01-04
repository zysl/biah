import React, { lazy, Suspense } from 'react';
import {Row, Col, Icon, Select, Input,Checkbox} from 'antd';
import { connect } from 'react-redux';
import iconDown from '../../images/icon_down.png'
import iconReport from '../../images/icon_report.png'
import iconDelete from '../../images/icon_delete.png'
import iconUpdate from '../../images/icon_update.png'
import './form.scss';
const { Option } = Select;
const { TextArea } = Input;


class FormBasic extends React.Component {

    render() {
        return (
            <div>

                {/* 预览信息1 */}
                {/* <div>
                    <Row className="center">
                        <Col span={12}> <span className="label">公司名称：</span><span>富源乌兰牧场</span></Col>
                        <Col span={12}> <span className="label">公司简称：</span><span>富源乌兰</span></Col>
                    </Row>
                    <Row className="center">
                        <Col span={12}> <span className="label">关联公司名称：</span><span>富源乌兰牧场</span></Col>
                    </Row>
                </div>
                <div className="nav_list">
                    <span>基本信息</span>
                    <img src={iconDown} />
                </div>

                <div className="nav_list">
                    <span>联系人信息</span>
                    <img src={iconDown} />
                </div>
                
                <div className="child">
                    <div className="nav_list">
                        <span>* 联系人信息1</span>
                        <img src={iconDown} />
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>姓：</span><span>富源乌兰牧场</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>名：</span><span>富源乌兰</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">记录类型：</span><span>个人</span></Col>
                            <Col span={12}> <span className="label">国家代码：</span><span>CN</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">上级公司：</span><span>科大讯飞</span></Col>
                        </Row>
                    </div>

                    <div className="nav_list">
                        <span>* 地址信息1</span>
                        <img src={iconDown} />
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">邮编：</span><span>13928273628</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货联系人及电话：</span><span>杨善龙</span><span className="left_10">13928273628</span></Col>
                        </Row>
                    </div>

                    <div className="nav_list">
                        <span>* 请填写下单邮箱帐号和下单联系人</span>
                        <img src={iconDown} />
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>《客户开户申请表》盖章版：</span><span>资料名称1.jpg</span><span className="look">查看</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>营业执照正本或副本复印件：</span><span>资料名称1.jpg</span><span className="look">查看</span></Col>
                        </Row>
                    </div>
                </div> */}

                {/* 审核信息 */}
                <div className="nav_list error">
                    <span>Veeva开户查重信息</span>
                    <span className="error_tips">查询结果：公司名称有重复</span>
                </div>
                <div>
                    <Row className="center">
                        <Col span={12}> <span className="label"><em>*</em>公司名称：</span><span className="error_tips">富源乌兰牧场</span></Col>
                        <Col span={12}> <span className="label">公司简称：</span><span>富源乌兰</span></Col>
                    </Row>
                    <Row className="center">
                        <Col span={12}> <span className="label">关联公司名称：</span><span>富源乌兰牧场</span></Col>
                    </Row>
                </div>
                <div className="nav_list">
                    <span>基本信息</span>
                    <div>
                        <span className="error_tips">查询结果：公司名称有重复</span>
                        <img src={iconDown} />
                    </div>
                </div>

                <div className="nav_list">
                    <span>联系人信息</span>
                    <img src={iconDown} />
                </div>
                
                <div className="child">
                    <div className="nav_list">
                        <span>* 联系人信息1</span>
                        <img src={iconDown} />
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>姓：</span><span>富源乌兰牧场</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>名：</span><span>富源乌兰</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">记录类型：</span><span>个人</span></Col>
                            <Col span={12}> <span className="label">国家代码：</span><span>CN</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">上级公司：</span><span>科大讯飞</span></Col>
                        </Row>
                    </div>
                    <div className="nav_list">
                        <span> </span>
                        <div className="operate">
                            <button className="cancel">驳回</button>
                            <button className="ok">标记已阅</button>    
                        </div>
                    </div>

                    <div className="nav_list">
                        <span>* 地址信息1</span>
                        <Checkbox>关联地址</Checkbox>
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span className="error_tips">江苏省</span><span className="left_10 error_tips">南京市</span><span className="left_10 error_tips">雨花台区</span><br /><span className="left_20 error_tips">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">邮编：</span><span>13928273628</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货联系人及电话：</span><span>杨善龙</span><span className="left_10">13928273628</span></Col>
                        </Row>
                    </div>
                    <div className="nav_list nav_list_veeva">
                        <span>Veeva id：355451</span>
                        <div className="operate">
                            <button className="cancel">驳回</button>
                            <button className="ok">通过</button>    
                        </div>
                    </div>

                    <div className="nav_list">
                        <span>* 地址信息2</span>
                    </div>
                    <div className="nav_content">
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20 error_tips">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20 error_tips">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">邮编：</span><span>13928273628</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货联系人及电话：</span><span>杨善龙</span><span className="left_10">13928273628</span></Col>
                            <Col span={12} className="label_input"> <span className="label"><em>*</em>GBS ID：</span><Input placeholder="请输入" style={{ width: 200 }} /><button className="ok">确定</button></Col>
                        </Row>

                        <img className="icon_img" src={iconUpdate} />
                    </div>

                    <div className="nav_list">
                        <span>* 地址信息3</span>
                    </div>
                    <div className="nav_content delete">
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>收货地址：</span><span>江苏省</span><span className="left_10">南京市</span><span className="left_10">雨花台区</span><br /><span className="left_20">浙江省绍兴市嵊州市三江街道领带园二路188号 剡江越园19号</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label">邮编：</span><span>13928273628</span></Col>
                        </Row>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>收货联系人及电话：</span><span>杨善龙</span><span className="left_10">13928273628</span></Col>
                        </Row>

                        <img className="icon_img" src={iconDelete} />
                    </div>

                    <div className="nav_list nav_list_veeva">
                        <div className="nav_list_left">
                            <span>Veeva id：</span>
                            <Input placeholder="请输入" />
                        </div>
                        <div className="operate">
                            <button className="cancel">驳回</button>
                            <button className="ok">通过</button>    
                        </div>
                    </div>


                    <div className="nav_list">
                        <span>* 请填写下单邮箱帐号和下单联系人</span>
                        <div className="nav_list_right">
                            <img src={iconReport} />
                            <span>导出资料</span>
                        </div>
                    </div>
                    <div>
                        <Row className="center">
                            <Col span={12}> <span className="label"><em>*</em>《客户开户申请表》盖章版：</span><span>资料名称1.jpg</span><span className="look">查看</span></Col>
                            <Col span={12}> <span className="label"><em>*</em>营业执照正本或副本复印件：</span><span>资料名称1.jpg</span><span className="look">查看</span></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(FormBasic);
