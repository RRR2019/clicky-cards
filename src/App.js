import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import characters from "./characters.json";



class App extends Component {

  state = {
      characters,
      score: 0,
      topScore: 0,
  };
  
//Shuffle code based on: https://stackoverflow.com/questions/38101522/how-to-render-random-objects-from-an-array-in-react
 shuffleCharacters=(id) => {

    const characters = this.state.characters;
    console.log(this.state.clickyArray);
    let i = characters.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
      
    }
    this.setState ({characters});  
    //this.clicky(id);
}

clicky= id =>{
    if(true){
        alert("you lose")
        this.setState({ score: 0 });
        this.setState({ topScore: this.state.topScore})  
    }
    else{
        this.setState({ score: this.state.score + 1 });
        this.setState({ topScore: this.state.topScore + 1 });
    }    
}

  render() {
    return (<div>
            <Navbar score={this.state.score} topScore={this.state.topScore} />
            <Header />
            <main>
            <div className="container col-9">
            {this.state.characters.map(character =>(
            <Cards name={character.name} id={character.id} shuffleCharacters={this.shuffleCharacters}/>
            ))}
            </div>
            </main>
            </div>
    );
  }
}

export default App;
