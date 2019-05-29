import React, { Component } from 'react';
import ChecklistItem from "../ChecklistItem";

class TravelChecklist extends Component{
  render(){
    const { checklistItems } = this.props;
    return (
      <div>
        {
          checklistItems.map((checklistItem, index) => (
            <ChecklistItem checklistItem={checklistItem} key={checklistItem.id} number={index+1}/>
          ))
        }
      </div>
    )
  }
}

export default TravelChecklist;
