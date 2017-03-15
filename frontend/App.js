import React, { Component } from 'react';
import key from '../apiKey';
import styles from './styles.css';
// import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.grabInput = this.grabInput.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }

  // componentWillMount() {
  //   console.log(people);
  // }

  grabInput(event) {
    // console.log(this.state.inputValue);
    this.setState({ inputValue: event.target.value });
  }

  renderContact() {
    // console.log(this.state.inputValue);

    fetch(`https://api.fullcontact.com/v2/person.json?apiKey=${key}&email=${this.state.inputValue}`)
    .then(response => response.json()).then((json) => {
      console.log(json);
    });

    // return (
    //   this.json.map((data, index) =>
    //     <ul key={index} className={styles.persons}>
    //       <li>{data.fullName}</li>
    //     </ul>,
    //   )
    // );
  }


  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.grabInput} />
        </form>
        <button type="submit" value="Submit" onClick={this.renderContact} />
      </div>
    );
  }
}

export default App;
