import React, { Component } from 'react';
import key from '../apiKey';
import styles from './styles.css';
// import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: 'bart@fullcontact.com',
      dataToRender: null,
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
      .then(response => response.json())
      .then(json =>
        this.setState({ dataToRender: json }),
      );
  }

  renderItems() {
    if (this.state.dataToRender !== null) {
      return (
        console.log(this.state.dataToRender),
          <div>

            <img src={this.state.dataToRender.photos[0].url} alt="guy" height="42" width="42" />
            <div>{this.state.dataToRender.contactInfo.fullName}</div>
            <div>{this.state.dataToRender.demographics.locationGeneral}</div>

            {this.state.dataToRender.socialProfiles.map(data =>
              <ul key={data.id} className={styles.persons}>
                <li key={data.id}>{data.url}</li>
              </ul>,
          )}

          </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.grabInput} />
        </form>
        <input type="submit" value="Submit" onClick={this.renderContact} />
        <div>{ this.renderItems() }</div>
      </div>
    );
  }
}

export default App;
// bart@fullcontact.com
