import { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.components';
import Searchbox from './components/search-box/search-box.components';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then(user => {
        this.setState(() => {
          return { monsters: user };
        }
        )
      })
  }
  onsearchchange = (event) => {

    const searchfield = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchfield };
    });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const { onsearchchange } = this
    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });


    return (
       <div className="App">
         
         <Searchbox
          className='monsters-search-box'
          placeholder='search monsters'
          onChangeHandler={onsearchchange} />
         <CardList monsters={ filteredmonsters }/>
       </div >
     );
  }
}

export default App;
