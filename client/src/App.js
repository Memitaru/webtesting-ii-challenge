import React from "react";
import Dashboard from './Components/Dashboard';
import Display from './Components/Display';
import './App.css';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  foul = () => {
    if (this.state.strikes < 2){
      this.setState({
        strikes: this.state.strikes+1
      })
    }
  }

  strike = () => {
    this.setState({strikes: this.state.strikes+1})
    if (this.state.strikes === 2){
      this.hit();
    }
  }

  ball = () => {
    this.setState({balls: this.state.balls+1})
    if (this.state.balls === 3){
      this.hit()
    }
  }

  render() {
    return(
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard hit={this.hit} foul={this.foul} strike={this.strike} ball={this.ball} />
      </div>
    )
  }
}

export default App;
