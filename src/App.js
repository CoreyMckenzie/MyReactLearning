
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planet: 'Earth',
      lifeforms: 'humans'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World, {this.state.planet}. These {this.state.lifeforms} live here</h1>
        <button 
          onClick={() => {
            this.setState({ planet: 'Mars' }); //Shallow merge of local state
            console.log(this.state);
          }}
        >
          Click to change state
        </button>
      </div>
    );
  } 
}

export default App;
