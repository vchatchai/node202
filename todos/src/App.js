import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo  from './containers/AddTodo'
import Footer  from './components/Footer'
import Link from './components/Link'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import VisibleTodoList from './containers/VisibleTodoList'


const  App = () => ( 
  <div>
    <AddTodo></AddTodo>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App