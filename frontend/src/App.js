import React from 'react'
import './App.css'

const App=()=>(
  <div className="app">
    <div className="maincontainer">
    <div className="div1">
      <h6 className="result"> Your Result</h6>
      <div className="circlediv">
        <h1 className="scorehead" >76</h1>
        <span className="scorepara">of 100</span>
      </div>
      <div className="contentdiv">
      <h1 className="head">Great</h1>
      <p className="para">You Scored higer than 65% of the people who have taken these tests</p>
      </div>
    </div>
    <div className="div2">
        <h1 className="head2">Summary</h1>
        <div className="logo1">
          <div className="iconstyle">
          <img src="icon-reaction.svg" alt="logo1" />
          <span className="spanning1">Reaction</span>
          </div>
        <p><span className="bolding">80</span>/100</p>


        </div>
         <div className="logo2">
          <div className="iconstyle">
          <img src="icon-memory.svg" alt="logo1" />
          <span className="spanning2">Memory</span>
          </div>
       <p><span className="bolding">92</span>/100</p>


        </div>
         <div className="logo3">
          <div className="iconstyle">
          <img src="icon-verbal.svg" alt="logo1" />
          <span className="spanning3">Verbal</span>
          </div>
         <p><span className="bolding">61</span>/100</p>
        </div>
         <div className="logo4">
          <div className="iconstyle">
          <img src="icon-visual.svg" alt="logo1" />
          <span className="spanning4">Visual</span>
          </div>
          <p><span className="bolding">73</span>/100</p>

        </div>
        <button className="but">Continue</button>
    </div>
    </div>
  </div>
)


export default App