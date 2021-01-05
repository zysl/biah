import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Dropdown, Icon, Select } from 'antd';
import { connect } from 'react-redux';
import up from '../../images/up.png';
import './select.scss';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const StSelect = (props) => {
  return (
    <Select
        mode="multiple"
        style={{ width: '220px' }}
        placeholder="请选择"
        onChange={handleChange}
    >
        {children}
    </Select>
  );
};

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(StSelect);
