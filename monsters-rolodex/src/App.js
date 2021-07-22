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
    const { billionaires, searchField } = this.state;
    const filteredBillionaires = billionaires.filter( billionaire =>
    billionaire.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (

        <div className="App">
            <input
                type='search'
                placeholder='Search monsters'
                onChange={ event => this.setState(
                    { searchField: event.target.value })}
            />
           <CardList billionaires = {filteredBillionaires }/>
        </div>
    );
  }
}

export default App;
