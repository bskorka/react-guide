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

    switchNameHandler = (newName) => {
        // console.log('Was clicked!')
        this.setState({
            persons: [
                {name: newName, age: 26},
                {name: 'Milena', age: 25},
                {name: 'Anna', age: 30}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Bartek', age: 26},
                {name: 'Milena', age: 25},
                {name: event.target.value, age: 30}
            ]
        })
    };

    render() {
        const btnStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Henlo, I am a Barteks' React App! </h1>
                <p>Super working sztuciec bejbe!</p>
                <button
                    style={btnStyle}
                    onClick={() => this.switchNameHandler("Łysyyy!")}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Bartiti!!!!')}>
                    I love my boyfriend very much!</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangedHandler}/>
            </div>
        );
    }

//     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Henlo, I am a Barteks\' React App!<3!!'));
}

export default App;
