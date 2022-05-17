import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
       this.state = {
         name: "",
         URL: "",
        }
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({
         name: event.target.value,
         URL: event.target.value
       })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log(this.state)
       let newFavLink = {name: this.state.name, URL: this.state.URL}
       this.setState({name: "", URL:""})
       this.props.addNew(newFavLink)
  }

  render() {
    return (
      <form
      onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label>Name</label>
        <input type = "text" onChange = {this.handleChange} />
        <label>URL</label>
        <input type = "text" onChange = {this.handleChange} />
        <button type = "submit" onClick = {this.onFormSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form
