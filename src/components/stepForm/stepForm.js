import React, { lazy, Suspense } from 'react';
import {Row, Col, Icon, Select, Input,Checkbox} from 'antd';
import { connect } from 'react-redux';
import nextStep from '../../images/next_step.png'
import './stepForm.scss';
const { Option } = Select;
const { TextArea } = Input;


class StepForm extends React.Component {

    render() {
        return (
            <div>
                <div className="step">
                    <div className="step_list checked">
                        <span><em>1</em></span>
                        <span>地址查重</span>
                    </div>
                    <img src={nextStep} />
                    <div className="step_list">
                        <span><em>2</em></span>
                        <span>填写基本信息</span>
                    </div>
                    <img src={nextStep} />
                    <div className="step_list">
                        <span><em>3</em></span>
                        <span>提交审核</span>
                    </div>
                </div>

                <div>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={6}> <span className="label"><em>*</em>公司名称：</span><Input placeholder="请输入公司名称" /></Col>
                        <Col span={6}> <span className="label">公司简称：</span><Input placeholder="请输入" /></Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={6}> <span className="label"><em>*</em>关联公司ID：</span><Input placeholder="请输入Sold to Veeva ID" /></Col>
                        <Col span={6}> <Input placeholder="详细公司名称" className="no_title_input"/></Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className="col12"> <span className="label"><em>*</em>客户拜访地址：</span>
                        <Select defaultValue="lucy" style={{ width: 190 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Input placeholder="请输入市" style={{ width: 190 }}/>
                        <Input placeholder="请输入区/县" style={{ width: 190 }}/></Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12}> <span className="label"><em>*</em>详细地址：</span><Input placeholder="请输入详细地址，请勿重复填写省市县" /></Col>
                        <Col span={6}></Col>
                    </Row>
                </div>

                <div className="operate">
                    <button className="cancel">取消</button>
                    <button className="ok">查重校验</button>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(StepForm);
