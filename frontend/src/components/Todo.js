import React from 'react'

const Todo = ({ todos }) => {
  return (
    <div>
      <center><h1>Todo Application</h1></center>
      {todos.map((todo) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{todo.id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{todo.title}</h6>
            <p class="card-text">{todo.description}</p>
            
          </div>
        </div>
      ))}
    </div>
  )
};

export default Todo;