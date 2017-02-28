import React, { Component } from 'react';
import people from '../people.json';
import styles from './styles.css';
// import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    console.log(people);
  }

  // componentWillMount() {
  //   console.log(people);
  // }


  renderPeople() {
    return (
      people.map((data, index) =>
        <ul key={index} className={styles.persons}>
          <li>{data.firstName}</li>
          <li>{data.lastName}</li>
          <li>{data.homeAddress}</li>
        </ul>,
      )
    );
  }


  render() {
    return (
      <div>
        { this.renderPeople() }
      </div>
    );
  }
}

export default App;
