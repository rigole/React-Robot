import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";


class  App extends Component {
  constructor() {
    super();
    this.state = {
      billionaires: [],
      searchField: ''
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
            <input type='search' placeholder='Search monsters' onChange={event => console.log(event.target.value)}/>
           <CardList billionaires = {this.state.billionaires}/>
        </div>
    );
  }
}

export default App;
