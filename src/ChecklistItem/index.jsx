import React from 'react';
import RadioButtonChecklistItem from "../RadioButtonChecklistItem";

class ChecklistItem extends React.Component{
  render(){
    const { checklistItem, checklistItem: { requiresFiles }, number } = this.props;
    return (
      <div className="checklist-item">
        <p className="title"><span className="number">{number}</span> {checklistItem.name}</p>
        <RadioButtonChecklistItem checklistItem={checklistItem}/>
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
