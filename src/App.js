import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      score: 0,
      topScore: 0,
      clicky: true
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (<div>
            <Navbar score={this.state.score} topScore={this.state.topScore} />
            <Header />
            <Cards />
            </div>
    );
  }
}

export default App;
