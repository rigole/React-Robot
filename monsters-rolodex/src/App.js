import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';


class  App extends Component {
  constructor() {
    super();
    this.state = {
      billionaires: [
        {
          name: 'Bezos',
          id: 'bil1'
        },
        {
          name: 'Elon',
          id: 'bil2'
        },
        {
          name: 'Placide',
          id: 'bil3'
        },
      ]
    }
  }

  render() {

    return (
        <div className="App">
          {
            this.state.billionaires.map(billionaire => <h1 key={billionaire.id}> {billionaire.name} </h1>)
          }
        </div>
    );
  }
}

export default App;
