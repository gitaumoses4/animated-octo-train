import React, { Component } from 'react';
import './ChecklistItem.scss';

class ChecklistItem extends Component {

  state = {

  };


  renderButton = (name, label, value) => {
    return (
      <div className="radio-button">
        <label htmlFor={name}>{label}</label>
        <div className={`input ${value ? 'checked': ''}`}
             onClick={() => {
          this.setState((prevState) => ({
              ...prevState,
              [name]: !prevState[name]
            }))
        }} />
      </div>
    )
  };

  render(){
    const { checklistItem, checklistItem: { requiresFiles }, number } = this.props;
    const { yes, no, notApplicable } = this.state;
    return (
      <div className="checklist-item">
        <p className="title"><span className="number">{number}</span> {checklistItem.name}</p>
        <div className="radio-buttons">
          {this.renderButton('yes', 'Yes', yes)}
          {this.renderButton('no', 'No', no)}
          {this.renderButton('notApplicable', 'Not Applicable', notApplicable)}
        </div>
        { requiresFiles && (
          <div>
            This requires files
          </div>
        )}
      </div>
    )
  }
}

export default ChecklistItem;
