import React, { Component } from "react";
import './App.css';

// Components
import fetchRandomFact from "../components/RandomFact";
import FactRenderer from "../components/FactQuote";
import fetchRandomBG from "../components/NewBG";
import NewFactButton from "../components/newFactButton";

class App extends Component {
  constructor(){
    super();
    this.state= {
      currFact: ''
    }
  }

  componentDidMount() {
    this.onFactRequest();
  }

  onFactRequest = () => {
    fetchRandomFact().then(r => this.setState({ currFact: r }));
    fetchRandomBG().then(r => document.body.style.backgroundImage = "url(" + r + ")");
  }

  render() {
    const { currFact } = this.state;

    return (
      <>
        <div id="full-page-effects">
          <div className="tc" id="main-div">
              <NewFactButton grabNewFact={this.onFactRequest}/>
              <FactRenderer fact={currFact}/>
          </div>
        </div>
      </>
    )
  }
}

export default App;

// https://picsum.photos // https://picsum.photos/1920/1080
// https://www.w3schools.com/howto/howto_css_image_effects.asp