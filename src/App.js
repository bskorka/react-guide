import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Bartek', age: 26},
            {name: 'Milena', age: 25},
            {name: 'Anna', age: 30}
        ],
        othrState: 'some other value'
    };

    switchNameHandler = () => {
        // console.log('Was clicked!')
        this.setState({
            persons: [
                {name: 'Bartosz', age: 26},
                {name: 'Milena', age: 25},
                {name: 'Anna', age: 30}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Henlo, I am a Barteks' React App! </h1>
                <p>Super working sztuciec bejbe!</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I love my boyfriend very
                    much!</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }

//     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Henlo, I am a Barteks\' React App!<3!!'));
}

export default App;
