import React, { Component } from 'react';
class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state ={
      numberOfScoopes: 0,
    };
  }
  onClick(){
    this.setState({

    });


  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.flavorName}</h1>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    );
  }
}

export default HelloWorld;
