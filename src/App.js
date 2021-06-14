import Header from "./component/header"
import './App.css';
import TodoList from './TodoList'
import { useState, useRef } from 'react'
import {Button, Input} from '@material-ui/core';

function App() {

  //using Reacts state because we are going to be modifying the todos
  const [todo, setTodo] = useState([])

  //react comes with use reference for specific reference, in this case its the <input/>
  const todoNameRef = useRef()


  //Handles add todos when the button is pressed
  const handleAddTodo = () => {
    //the current user input text
    const name = todoNameRef.current.value
    //checks if user inputs nothing and if they entered the same value
    if(name === '') 
      return
    for(let i = 0; i < todo.length; i++) //better way?
      if(name === todo[i].name)
        return

    const addDate = new Date();    
    //rest perameter for array making
    setTodo(todos => {
      return [...todos ,{
        name: name,
        specificKey: name,  //needed for mapping, can also use some sort of algorithm for specific id
        completed: false,    //Checkbox definition
        date: addDate, //Date for display
      }]
    })
    console.log(name);
  }

  //Removes checked todos when the button is clicked
  const removeTodos = () => {
    //filter out the not completed ones and put them into a new array then set it back to setTodo()
    const newTodos = todo.filter(complete => !complete.completed)
    setTodo(newTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todo}/>
      {/**TextField would probably be better**/}
      <Input inputRef={todoNameRef} type="text" placeholder='Add Todo!'></Input>
      <Button variant="contained" onClick={handleAddTodo}>Add Item</Button>
      <Button variant="contained" onClick={removeTodos}>Remove Items</Button>
      <h1>Todos: {todo.length}</h1>
      {/**<h1>Completed: {todo.filter(complete => complete.completed).length}</h1>**/}
    <Header/>
    </div>
  );
}

export default App;
