import React,{useReducer} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import TodoContext from './context/TodoContext';
import TodoReducer from './context/reducer'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/Todoform';
import ListTodo from './components/TodoCheck';
const  App=()=> {
  const [todos,dispatch]=useReducer(TodoReducer,[])
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>Todo App with Context Api</h1>
        <TodoForm></TodoForm>
        <ListTodo></ListTodo>
      </Container>
    </TodoContext.Provider>
  )
}

export default App;
