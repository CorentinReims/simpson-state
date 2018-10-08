import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Quote from "./Quote";
import Lamp from "./lamp";
import DisplayQuote from "./DisplayQuote";
import GenerateQuote from "./GenerateQuote";

const sampleQuote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, simpsonQuote: sampleQuote };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpsonQuote: data[0]
        });
      });
  }

  render() {
    const working = this.state.isToggleOn ? "working" : "coffee-break";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>{working.toUpperCase()}</button>
        </header>
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote simpsonQuote={this.state.simpsonQuote} />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Lamp />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;
