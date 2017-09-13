import React, { Component } from 'react';
import Flavor from './componenets/flavor'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      flavors: ["Chocolate", "Carmel", "Moose Tracks"],
    };
  }
  render() {
    const flavors = this.state.flavors.map((flavor)=>{
      return <Flavor id="flavor" flavorName={flavor}></Flavor>;
    });
    return (
      <div className="App">
        {flavors}
      </div>
    );
  }
}

export default App;
