import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";


class  App extends Component {
  constructor() {
    super();
    this.state = {
      billionaires: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({billionaires: users}));
  }

  render() {

    return (

        <div className="App">
           <CardList billionaires = {this.state.billionaires}/>
        </div>
    );
  }
}

export default App;
