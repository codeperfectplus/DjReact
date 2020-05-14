import React from 'react'

const Todo = ({ todos }) => {
  return (
    <div>
      <div className="container text-primary p-5 m-2">
      {todos.map((todo) => (
          <div class="card w-75 m-1 p-2">
          <div class="card-body">
            <h5 class="card-title">{todo.title}</h5>
            <p class="card-text">{todo.description}</p>
            <a href="https://github.com/codePerfectPlus/ToDoApp" class="btn btn-primary">Check Project</a>
          </div>
        </div> 
        ))}
    </div>
    </div>
  )
};

export default Todo;