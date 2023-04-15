import React, { Component } from "react";
import './App.css';

// Components
import fetchRandomFact from "../components/RandomFact";
import FactRenderer from "../components/FactQuote";
import fetchRandomBG from "../components/NewBG";
import NewFactButton from "../components/newFactButton";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      currFact: '',
      currBG: '',
      numberOfChanges: 0
    }
  }

  componentDidMount = () => {
    this.onFactRequest();
  }

  onFactRequest = () => {
    const { numberOfChanges } = this.state;
    let t = "";
    fetchRandomFact().then(r => this.setState({ currFact: r }));
    fetchRandomBG().then(r => {
      this.setState({ currBG: r, numberOfChanges: numberOfChanges+1 })
      t = r;
    }).then( r => {  
      if (numberOfChanges > 0) {
        this.animation();
      } else {
        let ro = document.querySelector(':root');
        ro.style.setProperty('--midwayBackground', "url("+t+")");
      }
    });
  }

  animation() {
    let ro = document.querySelector(':root');
    document.getElementById('bgDiv').className='gradualAnimation';
    setTimeout(() => {
      ro.style.setProperty('--midwayBackground', "url("+this.state.currBG+")");
      document.getElementById('bgDiv').classList.remove("gradualAnimation");
    }, 1200)
  }
  
  render() {
    const { currFact, currBG } = this.state;
    let ro = document.querySelector(':root');
    let newOld = getComputedStyle(ro).getPropertyValue('--currentBackground');
    ro.style.setProperty('--oldBackground', newOld);
    ro.style.setProperty('--currentBackground', "url("+currBG+")");
    ro = null;

    return (
      <>
        <div id="bgDiv">
          <div id="full-page-effects" style={{backdropFilter: "blur(10px) grayscale(50%)"}}>
            <div className="tc" id="main-div">
                <NewFactButton grabNewFact={this.onFactRequest}/>
                <FactRenderer fact={currFact}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;

// https://picsum.photos // https://picsum.photos/1920/1080
// https://www.w3schools.com/howto/howto_css_image_effects.asp