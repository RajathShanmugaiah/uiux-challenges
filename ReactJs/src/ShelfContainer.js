import './App.css';
import './style/style.css'
import React, { Component } from "react";
import Header from './components/Header';
import Input from './components/Input';
import Books from './components/Books';
import { v4 as uuidv4 } from 'uuid';

class ShelfContainer extends Component {
  state = {
    books: [ ]
  };

  handleChange = (id) => {
    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === id) {
          book.isRead = !book.isRead;
        }
        return book;
      }),
    });
  };

  delBook = (id) => {
    this.setState({
      books: [
        ...this.state.books.filter((book) => {
          return book.id !== id;
        }),
      ],
    });
  };

  addBook = (title) => {
    const newBook = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      isRead: false,
    };
    this.setState({
      books: [...this.state.books, newBook],
    });
  };
  componentDidMount(){
    fetch('https://my-json-server.typicode.com/raliasadil/library/books')
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Input addBookProps={this.addBook} />
        <Books
          books={this.state.books}
          handleChangeProps={this.handleChange}
          deleteBookProps={this.delBook}
        />
      </div>
    );
  }
}
export default ShelfContainer;
