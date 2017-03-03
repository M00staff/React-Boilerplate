import React, { Component } from 'react';
import people from '../people.json';
import styles from './styles.css';
// import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();

    this.nextPeople = this.nextPeople.bind(this);

    this.state = {
      startNum: 0,
      secondNum: 10,
    };

    people.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
    // console.log(people);
  }


  componentWillMount() {
    const countries = [];

    people.map(d =>
    countries.push(d.homeCountry));

    const result = { };

    for (let i = 0; i < countries.length; i += 1) {
      if (!result[countries[i]]) {
        result[countries[i]] = 0;
      }
      result[countries[i]] += 1;
    }

    this.setState({ result });
    // console.log(result);
  }


  nextPeople() {
    this.setState({
      startNum: (this.state.startNum + 10),
      secondNum: (this.state.secondNum + 10),
    });
  }


  displayResult() {
    const newArray = [];

    for (const prop in this.state.result) {
      // if statement is for this eslint error http://eslint.org/docs/rules/guard-for-in
      if (Object.prototype.hasOwnProperty.call(this.state.result, prop)) {
        newArray.push({ name: prop, count: this.state.result[prop] });
      }
    }

    newArray.sort((a, b) => b.count - a.count);
    // console.log(newArray);
    return (
      newArray
    );
  }


  renderPeople() {
    return (
      <ul className={styles.persons}>
        {people.slice(this.state.startNum, this.state.secondNum).map(data =>
          <li key={data.lastName}>{ data.firstName }</li>,
        )}
      </ul>
    );
  }


  render() {
    return (
      <div>

        { this.displayResult().slice(0, 5).map(d =>
          <div key={d.name}>{d.name} {d.count} </div>,
        )}

        <div>{ this.renderPeople() }</div>
        <button onClick={this.nextPeople}>next</button>

      </div>
    );
  }
}

export default App;
