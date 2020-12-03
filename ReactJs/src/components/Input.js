import React, { Component } from "react";
class Input extends Component {
    state = {
      title: ""
    };
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }; 
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.addBookProps(this.state.title);
      this.setState({
        title: ""
      });
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            className="add-input"
            placeholder="Add Book"
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <input type="submit" className="input-add" value="Add" />
        </form>
      );
    }
  }
  export default Input;