import React, { Component } from 'react';
import key from '../apiKey';
import styles from './styles.css';
// import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    // console.log(key);
  }

  // componentWillMount() {
  //   console.log(people);
  // }


  renderContact() {
    fetch(`https://api.fullcontact.com/v2/person.json?apiKey=${key}&email=bart@fullcontact.com`)
    .then(response => response.json()).then((json) => {
      console.log(json);
    });
    // return (
      // people.map((data, index) =>
      //   <ul key={index} className={styles.persons}>
      //     <li>{data.firstName}</li>
      //     <li>{data.lastName}</li>
      //     <li>{data.homeAddress}</li>
      //   </ul>,
      // )
    // );
  }


  render() {
    return (
      <div>
        { this.renderContact() }
      </div>
    );
  }
}

export default App;
