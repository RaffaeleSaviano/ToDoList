import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
class App extends Component{
  constructor(){
    super();
    this.state = {
      currentTodo: '',
      todos: []
    }

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onChangeText(event){
    this.setState({ currentTodo: event.target.value });
  }

  onSubmitText(event){
    event.preventDefault();
      if(this.state.currentTodo.length != 0)
        this.setState({
          todos: [...this.state.todos, this.state.currentTodo],
          currentTodo: ''
        });
    }

    render(){
      return(
        <div>
          <h1> Todo List </h1>
          <form onSubmit={ this.onSubmitText }>
            <input value={ this.state.currentTodo } onChange={this.onChangeText}></input>
            <button>Insert</button>
            <ul>
              { this.state.todos.map((todo,index) => <li key={index}> { todo } </li>)}
            </ul>
          </form>
        </div>
      );
    }
  }
}

export default App;
  export default App;
