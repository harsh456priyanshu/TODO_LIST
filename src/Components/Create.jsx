import { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {
     const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");
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


  return (
    <div className=' text-white  w-[60%] p-10 '>
      <h1 className='text-5xl mb-10 font-thin'>Set <span className='text-red-500'>Reminders</span> for <br /> Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input 
        className=' p-2 border-b  w-full text-2xl font-thin outline-0'
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
         placeholder="title"
          />
          <br />
          <br />
          <button className='text-xl mt-5 px-10 py-2 border rounded'>Create Todo</button>
      </form>
    </div>
  )
}

export default Create
