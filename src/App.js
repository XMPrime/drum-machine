import React from 'react';
import ReactDOM from 'react-dom'
import PadBank from './PadBank.js'
import SoundNameDisplay from './SoundNameDisplay.js'
import DrumToggles from './DrumToggles.js'
import './App.css';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
keyCode: 81,
keyTrigger: 'Q',
id: 'Chord-1',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
keyCode: 87,
keyTrigger: 'W',
id: 'Chord-2',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
keyCode: 69,
keyTrigger: 'E',
id: 'Chord-3',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
keyCode: 65,
keyTrigger: 'A',
id: 'Shaker',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
keyCode: 83,
keyTrigger: 'S',
id: 'Open-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
keyCode: 68,
keyTrigger: 'D',
id: 'Closed-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
keyCode: 90,
keyTrigger: 'Z',
id: 'Punchy-Kick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
keyCode: 88,
keyTrigger: 'X',
id: 'Side-Stick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
keyCode: 67,
keyTrigger: 'C',
id: 'Snare',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      power: true,
      display: 'Q',
      currentPadBank: bankOne,
      currentPadBankId: 'Heater 1',
      volume: 0.3
    }
    // this.handleKeyDown = this.handleKeyDown.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    this.soundNameToggle = this.soundNameToggle.bind(this)
  
  } 

  soundNameToggle(soundId) {
    this.setState({
      currentPadBankId: soundId
    })
  }

  render() {
    return(
      <div className="appContainer">
        <PadBank currentPadBank={this.state.currentPadBank} soundNameToggle={this.soundNameToggle} />
        <SoundNameDisplay currentPadBankId={this.state.currentPadBankId} />
        <DrumToggles />
      </div>
    )
  }



  // // playSound(event) {
  // //   render () {
  // //     return (
  // //       <audio autoplay src={this.state.soundSource}></audio>
  // //     )
  // //   }
    
      
  // // }

  // handleKeyDown (event) {
  //   console.log(event)
  //   for (let i = 0; i < bankOne.length; i++) {
  //     if (bankOne[i].keyTrigger === event.key.toUpperCase()) {
  //       this.setState({soundSource: ""})
  //       this.setState({
  //         soundType: bankOne[i].id,
  //         soundSource: bankOne[i].url
  //       })
        
  //     }
  //   }

  //       // playSound(event.key)
  // }
  

  // handleClick() {
  //   this.setState({
  //     soundType: bankOne[0].id,
  //     soundSource: bankOne[0].url
  //   })
  // }

  // render() {
  //   const drumButtons = bankOne.map(sound => {
  //     return (
  //       <div className="drum-pad" id={sound.id} key={sound.keyTrigger} data-key={sound.keyCode}>
  //         <button onClick={this.handleClick}>{sound.keyTrigger}</button>
  //         <audio autoPlay volume="0.5" src={this.state.soundSource}>test</audio>
         
  //       </div>
  //     )
  //   })
    
  //   return (
  //     <div id="drum-machine">
  //       <div id="display">  
  //         {drumButtons}
  //       </div>
  //       <h3>{this.state.soundType}</h3>
  //     </div>

  //   )
  // }


}


ReactDOM.render(<App />,
document.getElementById('root')
);



export default App;