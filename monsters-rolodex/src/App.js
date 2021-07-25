import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class  App extends Component {
  constructor() {
    super();
    this.state = {
      billionaires: [],
      searchField: ''
    };

    this.handleChange= this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({billionaires: users}));
  }
  handleChange(e){
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {billionaires, searchField} = this.state;
    const filteredBillionaires = billionaires.filter(billionaire =>
        billionaire.name.toLowerCase().includes(searchField.toLowerCase())

    );
    return (

        <div className="App">
          <h1>Monsters Rolodex</h1>
           <SearchBox
               type='search'
               placeholder='Search monsters'
               handleChange={ this.handleChange }
           />
           <CardList billionaires={filteredBillionaires}/>
        </div>
    );
  }
}

export default App;
