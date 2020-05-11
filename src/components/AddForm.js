import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: '',
        age: ''
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    resetForm() {
        this.setState({
            name: '',
            age: ''
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.getData(this.state)
        this.resetForm()
    }
    render() {
        return (
            <div className="addForm">
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.changeHandler}></input>
                    <label>Age</label>
                    <input id="age" type="text" value={this.state.age} onChange={this.changeHandler}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddForm