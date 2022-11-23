
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{
        name: 'Frankenstein',
      },
      {
        name: 'Dracula',
      },
      {
        name: 'Zombie',
      }
      ]
    };

  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            
          })
        }
      </div>
    );
  } 
}

export default App;
