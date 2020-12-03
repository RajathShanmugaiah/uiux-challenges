import React, { Component } from "react";
class Book extends Component {
    render() {
      const { isRead, id, title,imageLink } = this.props.book; 
      return (
        <li className="book-item">
          <input
            type="checkbox"
            checked={isRead}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteBookProps(id)}>Remove</button>
          <img src={imageLink} alt=" " />
          <span>{title}</span>
        </li>
      );
    }
  }
  
  export default Book;