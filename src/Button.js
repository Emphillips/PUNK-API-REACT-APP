import React, { Component } from 'react';

class Button extends Component {
  clicked(){
    console.log('The Button was clicked');
  }
  render(){

    return<div>
      <button onClick={ this.clicked }>TheButton</button>
    </div>;
    }
}