import React, { Component } from 'react';
import './ChecklistItem.scss';
import RadioButton from "../RadioButton";

const choices = {
  yes: false,
  no: false,
  notApplicable: false
};

class RadioButtonChecklistItem extends Component {

  state = {
    values: choices
  };

  onChange = (e) => {
    const { target: { checked, name }} = e;
    this.setState({ values: {...choices, [name]: checked} });
  };

  componentWillMount = () => {
    const { checklistItem : { choice }} = this.props;
    choice && this.setState({ values: { ...choices, [choice]: true }})
  };

  componentWillReceiveProps = (nextProps) => {
    const { checklistItem : { choice }} = nextProps;
    choice && this.setState({ values: { ...choices, [choice]: true }})
  };

  renderButton = (name, label, value, checked) => {
    return (
      <div className="radio-button">
        <label htmlFor={name}>{label}</label>
        <RadioButton
          value={value}
          name={name}
          checked={checked}
          onChange={this.onChange}
        />
      </div>
    )
  };

  render(){
    const { values : { yes, no, notApplicable } } = this.state;
    return (
      <div className="radio-buttons">
        {this.renderButton('yes', 'Yes', 'yes', yes)}
        {this.renderButton('no', 'No', 'no', no)}
        {this.renderButton('notApplicable', 'Not Applicable','notApplicable', notApplicable)}
      </div>
    )
  }
}

export default RadioButtonChecklistItem;
