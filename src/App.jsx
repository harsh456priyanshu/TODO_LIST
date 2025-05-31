import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {

   const [title, settitle] = useState("");

  const [todos , settodos] = useState([
    {
      id: 1,
      title:"Do Your Pending Work",
      isCompleted: false
    }
  ]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo ={
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);

    settitle("");
  }

  const rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })


  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={SubmitHandler}>
        <input 
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
         placeholder="title"
          />
          <br />
          <br />
          <button>Create Todo</button>
      </form>
      <hr />
      <h1>Pending Todos</h1>
      <div>{rendertodos}</div>
    </div>
  )
}

export default App
