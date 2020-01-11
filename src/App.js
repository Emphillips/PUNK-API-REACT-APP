import React, { Component } from 'react';
import './App.css';


// class LikeBrew extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       likes: this.props.likes,
//     };
//   }
//   handleLike = () => {
//     this.setState(prevState => ({
//       likes: prevState.likes + 1,
//     }));
//   }
// }


class App extends Component {
  constructor(props) {
  super(props)
  

  this.state  = {
    posts: [],
    }
  }
// fetching data from api url
componentDidMount() {
  fetch('https://api.punkapi.com/v2/beers')
  .then(res => res.json())
  .then(data => this.setState({ posts: data }))

}

render() {
    return (
      <div>
          {/* <div>
          <button className = {LikeBrew(onClick={this.handleLike}>Beer Me!</onClick={this.handleLike}>
        )}>
        </div> */}


        {this.state.posts.map((post) => {
          //console.log(post); - Confirm Beer list is showing
          return <div key={post.id}>
            <h2>{post.name}</h2>
              <p>{post.tagline}</p>
            </div>
         })}
      </div>
        )
      }
    }

    



export default App;
