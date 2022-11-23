
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{
        name: 'Frankenstein',
        id: 'asc1'
      },
      {
        name: 'Dracula',
        id: 'asc2'
      },
      {
        name: 'Zombie',
        id: 'asc3'
      }
      ]
    };

  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => { // map() is a built-in JS function that takes an array and returns a new array with the same number of elements as the original array
            return( 
            <div key={monster.id}> 
              <h1>{monster.name}</h1>
            </div>
            ); //key is a special prop that React uses to identify each element in the array
          })
        }

      </div>
    );
  } 
}

export default App;
