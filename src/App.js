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
 shuffleCharacters= characters => {
    let i = characters.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
      
    }
    this.setState ({characters});  
}

clicky= id =>{
  let notClicked = false;
  const newCharacters = this.state.characters.map( character =>{
    if(character.id === id){
      if(!character.clicked){
          character.clicked=true;
          notClicked = true;
      }
    }
    return character
  });

  if(notClicked){
    this.rightGuess(newCharacters);
  }
  else{
    alert("YOU LOST :(")
    this.reset(newCharacters)
  }
}

rightGuess = newCharacters =>{
  let trueArray=[];
  for(let i=0; i<newCharacters.length; i ++){
    if(newCharacters[i].clicked){
      trueArray.push(newCharacters[i])
    }
  }
  console.log(trueArray)
  if(trueArray.length===12){
    alert("You Win :)")
    this.reset(newCharacters)
  }
  else{
  this.setState ({ score: this.state.score + 1 });

  this.shuffleCharacters(newCharacters)
  if(this.state.score > this.state.topScore || this.state.score===this.state.topScore ){
    this.setState({topScore: this.state.score + 1})
  }
}
}

reset = newCharacters =>{
  const resetCharacters = newCharacters.map(character => {
    character.clicked = false;
    return character;
  })
  
  this.shuffleCharacters(resetCharacters)
  this.setState({score: 0})
}


  render() {
    return (<div>
            <Navbar score={this.state.score} topScore={this.state.topScore} />
            <Header />
            <main>
            <div className="container col-9">
            {this.state.characters.map(character =>(
            <Cards name={character.name} id={character.id} clicky={this.clicky}/>
            ))}
            </div>
            </main>
            </div>
    );
  }
}

export default App;
