import React, { Component } from 'react';
import './TripTabView.scss';

class Tab extends Component {

  state = {

  };

  render(){
    const { title, subTitle, onClick, active } = this.props;
    return (
      <div className={`tab ${active ? 'active': ''}`} onClick={onClick}>
        <h3 className="tab__header">{title}</h3>
        <h5 className="tab__sub_header">{subTitle}</h5>
      </div>
    )
  }
}

class TripTabView extends Component{
  state = {
    current: 0
  };

  changeTab = (index) => {
    this.setState({ current: index});
  };

  render(){
    const { tabs , children} = this.props;
    const { current } = this.state;
    return (
      <div className="tab-view">
        <div className="tabs">
          {
            tabs.map((tab, index) => (
              <Tab {...tab} onClick={() => this.changeTab(index)} active={index === current} />
            ))
          }
        </div>
        <div className="tab-view__content">
          {
            children[current]
          }
        </div>
      </div>
    )
  }
}


export default TripTabView;
