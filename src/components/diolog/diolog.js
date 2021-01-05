import React, { lazy, Suspense } from 'react';
import { Layout, Row, Col, Icon, Radio, Checkbox, Modal, Select, Input} from 'antd';
import { connect } from 'react-redux';
import iconQuestion from '../../images/icon_question.png'
import './diolog.scss';
const { Option } = Select;
const { TextArea } = Input;


const children = [];
    for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value){
    console.log(`Selected: ${value}`);
}

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

class StDiolog extends React.Component {
    state = {
        value: 1,
        visible: true,
        size: 'default'
    };
    
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
        value: e.target.value,
        });
    };

    onCheckChange = e => {
        console.log(`checked = ${e.target.checked}`);
    }

    hideModal = e => {
        this.setState({
            visible: false
        });
    }

   

    
    render() {
        const { size } = this.state;
    return (
        <div className="show">

            {/* 第一类弹窗无删除按钮 */}
            <div className="diolog">
                <div className="diolog-title">
                    <img src={iconQuestion} />
                    <span>确认删除当前用户组？</span>
                </div>
                <div className="content">
                    <span className="span">信息描述，可能会很长信息描述，可能会很长。信息描述，可能会很长。信息描述，可能会很长。</span>    
                </div>
                <div className="operate">
                    <button className="cancel">取消</button>
                    <button className="ok">确定</button>    
                </div>
            </div>
            
            <div className="diolog">
                <div className="diolog-title">
                    <img src={iconQuestion} />
                    <span>提示信息</span>
                </div>
                <div className="content">
                    <span className="tips">您已购选12条客户信息，请选择您要关闭的系统：</span>    
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>Veeva 系统账号</Radio>
                        <Radio value={2}>GBS 系统账号</Radio>
                    </Radio.Group>
                    <span className="em_tips">您已购选12条客户信息，请选择您要关闭的系统：</span>    
                </div>
                <div className="operate">
                    <button className="cancel">取消</button>
                    <button className="ok">确定</button>    
                </div>
            </div>


            <div className="diolog">
                <div className="diolog-title">
                    <img src={iconQuestion} />
                    <span>提示信息</span>
                </div>
                <div className="content">
                    <span className="span">信息描述，可能会很长信息描述，可能会很长。信息描述，可能会很长。信息描述，可能会很长。</span>    
                </div>
                <div className="operate">
                    <Checkbox onChange={this.onCheckChange} className="check">不再提醒</Checkbox>
                    <button className="cancel">取消</button>
                    <button className="ok">确定</button>    
                </div>
            </div>

            <div className="diolog">
                <div className="diolog-title">
                    <img src={iconQuestion} />
                    <span>提示信息</span>
                </div>
                <div className="content">
                    <span className="tips">此次更新，会影响到对应68位客户的对接，是否确认执行此次系统操作。</span>
                    <span className="tips">详细变更对应表如下，可点击查看并下载：</span>    
                    <span className="down_tips">客户关系变更表20201027.xlsx <em><Icon type="vertical-align-bottom" />下载</em></span>    
                </div>
                <div className="operate">
                    <button className="cancel">取消</button>
                    <button className="ok">确定</button>    
                </div>
            </div>


            {/*  第二类弹窗 */}

            {/*  弹窗1 */}
            {/* <Modal
                title="您已批量选择11人"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                okText="确认"
                cancelText="取消"
                >
                    <Row>
                    <Col span={4}></Col>
                    <Col span={5}> <span>修改角色为：</span></Col>
                    <Col span={11}><Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 240 }}>
                    {children}
                    </Select></Col>
                    <Col span={4}></Col>
                    </Row>
               
            </Modal> */}

            {/*  弹窗2 */}
            {/* <Modal
                title="请填写驳回原因"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                okText="提交"
                cancelText="取消"
                >
                    <Row className="line-top">
                    <Col span={4}></Col>
                    <Col span={4}> <span>驳回原因：</span></Col>
                    <Col span={12}><TextArea rows={4} /></Col>
                    <Col span={4}></Col>
                    </Row>
               
            </Modal> */}

            {/*  弹窗3 */}
            {/* <Modal
                title="请输入您要添加的角色"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                okText="确定"
                cancelText="取消"
                >
                    <Row>
                    <Col span={4}></Col>
                    <Col span={3}> <span>角色：</span></Col>
                    <Col span={13}><Input placeholder="请输入"/></Col>
                    <Col span={4}></Col>
                    </Row>
            </Modal> */}

            {/*  弹窗4 */}
            {/* <Modal
                title="驳回原因"
                visible={this.state.visible}
                footer={null}
                >
                    <p className="tips">客户开户申请表，资料不全且文件未盖章。</p>
               
            </Modal> */}

            {/*  弹窗5 */}
            {/* <Modal
                title="导出资料为pdf"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                okText="确定"
                cancelText="取消"
                >
                    <p className="p">请选择您要导出的文件：</p>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    <Row className="col_checkbox">
                        <Col span={24}>
                            <Checkbox value="A">全选</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="B">营业执照正本或副本复印件</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="C">兽药经营许可证</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="D">营业执照正本或副本复印件</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="E">兽药经营许可证</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Modal> */}

            {/*  弹窗6 */}
            <Modal
                title="导出资料为pdf"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                okText="确定"
                cancelText="取消"
                >
                    <p className="p">请选择您要导出的文件：</p>
                    <Radio.Group style={{ width: '100%' }} onChange={onChange}>
                    <Row className="col_checkbox">
                        <Col span={24}>
                            <Radio value="A">历史审核通过的地址（游离态地址）</Radio>
                        </Col>
                        <Col span={24}>
                            <Radio value="B">历史审核通过的地址（游离态地址）</Radio>
                        </Col>
                        <Col span={24}>
                            <Radio value="C">历史审核通过的地址（游离态地址）</Radio>
                        </Col>
                        <Col span={24}>
                            <Radio value="D"><Input placeholder="新增地址信息"/></Radio>
                        </Col>
                    </Row>
                </Radio.Group>
            </Modal>

        </div>
    );
    };
}
const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(StDiolog);
