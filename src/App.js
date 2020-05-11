import React, { Component } from 'react';
import AddForm from './components/AddForm';
import PersonView from './components/PersonView';

class App extends Component {
  state = {
    persons: []
  }
  addPerson = (personObj) => {
    this.setState({
      persons: [...this.state.persons, personObj]
    })
  }
  deletePerson = (deleteId) => {
    const remainPerson = this.state.persons.filter((person, index) => {
      return index !== deleteId // return array value
    })
    this.setState({
      persons: remainPerson
    })
  }
  componentDidMount() {
    console.log("i m component did mount...")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated component")
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="mainApp">
        <h1>Welcome To React...</h1>
        <AddForm getData={this.addPerson} />
        <PersonView getData={this.deletePerson} personArr={this.state.persons} />
      </div>
    )
  }
}

export default App;
