import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';

export default class extends Component {
    state = { startDate: this.props.field.value };
 
  handleChange = date => {
    const { form, field } = this.props;
    
    form.setFieldValue(field.name, date);

    this.setState({
      startDate: date
    });
  }
 
  render() {  
    const { field } = this.props;       
    const selectedDate =  field.value && new Date(field.value);

    return (
        <DatePicker
            {...this.props}
            selected={selectedDate}
            onChange={this.handleChange}
        />
    );
  }
};