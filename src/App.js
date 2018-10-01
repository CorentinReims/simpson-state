import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes"
import Quote from "./Quote";
import Lamp from "./lamp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const working =(this.state.isToggleOn) ? 'working' : 'coffee-break'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>
            {working.toUpperCase()}
          </button>
        </header>
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
