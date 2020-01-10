import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers:[],
    };
  }


componentDidMount() {
  fetch('https://api.punkapi.com/v2/beers')
  .then(results => {
    return results.json();

  }).then(data => {
    let beerList = data.results.map(() => {
      return(
        <div>
        </div>
      )
    })
  

    render() {
      <div>
        { this.state.beers.map( beer => (
          <BeerCard beerInfo={beer} />
        ))}
      </div>
    }

  }
      this.setState({beers: beers});
      console.log("state", this.state.beers)
    
    )
  }

  button onClick=

// render() {
//   return (
//     <div className="container2">
//       <div className="container1">
//       </div>
//     </div>
//   )
// }






export default App;
