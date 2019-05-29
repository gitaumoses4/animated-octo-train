import React from 'react';
import './App.css';
import TripTabView from "./TripTabView";
import TravelChecklist from "./TravelChecklist";

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


const checklistItems = [
  {
    id: 1,
    name: 'Do you have a valid passport',
    requiresFiles: true
  },
  {
    id: 2,
    name: 'Do you have a valid visa',
    requiresFiles: false
  }
];

const trips = [
  {
    id: 'jasd',
    checklistItems
  },
  {
    id: 'jad',
    checklistItems: [
      ...checklistItems,

      {
        id: 3,
        name: 'Do you have a valid yellow fever card',
        selection: true,
        requiresFiles: false
      }
    ]
  },
  {
    id: 'akljv',
    checklistItems: [
      ...checklistItems,
      {
        id: 3,
        name: 'Do you have a valid green fever card',
        requiresFiles: false
      },
      {
        id: 4,
        name: 'Do you have a valid pink fever card',
        requiresFiles: false
      }
    ]
  },
  {
    id: 'jad',
    checklistItems
  },
];
const onTabChanged = (index) => {

};

function App() {
  return (
    <div className="App">
      <TripTabView tabs={tabs} current={3} onTabChanged={onTabChanged}>
        {
          trips.map(trip => (
            <TravelChecklist checklistItems={trip.checklistItems} key={trip.id} tripId={trip.id}/>
          ))
        }
      </TripTabView>
    </div>
  );
}

export default App;
