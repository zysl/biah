import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Dropdown, Icon, DatePicker } from 'antd';
import { connect } from 'react-redux';

class DateRange extends React.Component {
    state = {
      startValue: null,
      endValue: null,
      endOpen: false,
    };
  
    disabledStartDate = startValue => {
      const { endValue } = this.state;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    };
  
    onChange = (field, value) => {
      this.setState({
        [field]: value,
      });
    };
  
    onStartChange = value => {
      this.onChange('startValue', value);
    };

    render() {
      const { startValue} = this.state;
      return (
        <div>
          <DatePicker
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={startValue}
            placeholder="Start"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />
        </div>
      );
    }
  }
  
//   ReactDOM.render(<DateRange />, mountNode);
  const mapStateToProps = (state) => {
    return {}
  };
  
  export default connect(mapStateToProps)(DateRange);
