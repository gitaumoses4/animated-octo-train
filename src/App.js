import React from 'react';
import './App.css';
import TripTabView from "./TripTabView";

const tabs = [
  {
    title:'Trip 1',
    subTitle: 'Nairobi to Lagos'
  },
  {
    title: 'Trip 2',
    subTitle: 'Lagos to Kigali'
  },
  {
    title: 'Trip 3',
    subTitle: 'Lagos to Kigali'
  },
  {
    title: 'Trip 4',
    subTitle: 'Lagos to Kigali'
  }
];

const data = [];

const onTabChanged = (index) => {

};

function App() {
  return (
    <div className="App">
      <TripTabView tabs={tabs} current={3} onTabChanged={onTabChanged}>
        <div> This is the first tab</div>
        <div> This is the second tab </div>
        <div> This is the third trip tab </div>
        <div> This is the fourth tab </div>
      </TripTabView>
    </div>
  );
}

export default App;
