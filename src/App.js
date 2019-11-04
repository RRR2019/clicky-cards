import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import characters from "./characters.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      characters,
      score: 0,
      topScore: 0,
      clicky: true
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (<div>
            <Navbar score={this.state.score} topScore={this.state.topScore} />
            <Header />
            <main>
            <div className="container col-9">
            {this.state.characters.map(character =>(
            <Cards src={character.image} name={character.name}/>
            ))}
            </div>
            </main>
            </div>
    );
  }
}

export default App;
