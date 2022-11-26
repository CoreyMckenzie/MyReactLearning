import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
    console.log('Constructor intialized');
  }

  componentDidMount() { 
    console.log('CDM')

    fetch('https://jsonplaceholder.typicode.com/users') //Api call 
      .then(response => response.json()) //.then() is a built-in JS function that takes a function as an argument and returns a new function that will be called when the promise is resolved (i.e. when the data is returned from the API)
      .then((users) =>       //whatever got returned from response, JSON is going to get passed to this users as the argument of our callback.
      this.setState( 
        () => {
        return { monsters: users };
      }, 
      () => {
        console.log(this.state.monsters);
      } ));  //Every dot, then that returns a value is going to return another promise that has been resolved. 
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }; 
    });
  } //Arrow function to bind the 'this' keyword to the class so that it can access the state object 

  render() {
    console.log('Rendering...');
    const { monsters, searchField } = this.state; //Destructuring, pulling out the properties from the state object and setting them to a variable with the same name
    const { onSearchChange } = this; //Destructuring, pulling out the properties from the state object and setting them to a variable with the same name

    const filteredMonster = monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='monster name' onChange={onSearchChange}/>

        {
          filteredMonster.map((monster) => { // map() is a built-in JS function that takes an array and returns a new array with the same number of elements as the original array
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
