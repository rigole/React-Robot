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
      searchField: '',
      title: ''
    };

    //this.onSearchChange= this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({billionaires: users}));
  }
  /*handleChange(e){
    this.setState({ searchField: e.target.value })
  }*/
  onSearchChange =  event => {
    this.setState({
      searchField: event.target.value,
      title: event.target.value
    });
  }

  render() {
    const { billionaires, searchField, title } = this.state;
    //const filteredBillionaires = billionaires.filter(billionaire =>
        //billionaire.name.toLowerCase().includes(searchField.toLowerCase())

    //)
    return (

        <div className="App">
          <h1>{title}</h1>
           <SearchBox onSearchChange={ this.onSearchChange }
           />
           <CardList billionaires={billionaires}/>
        </div>
    );
  }
}

export default App;
