import { toast } from "react-toastify";

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;


      

    const rendertodos = todos.map((todo) => {
        return <li
         key={todo.id} className="mb-4 flex  justify-between items-center p-3 bg-gray-900 rounded">
           <span className="text-xl font-thin mb-4"> {todo.title}</span>  {" "}
             <button className="font-thin text-sm text-red-400" onClick={() => DeleteHandler(todo.id)}>Delete</button>
             </li>
    })

    const DeleteHandler = (id) => {
        const filtertodo = todos.filter((todo) => todo.id != id);
        settodos(filtertodo);
        toast.error("Todo deleted!");
    }



    return (
        <div className="w-[40%] p-10 text-white">
            <h1 className="text-5xl mb-10 font-thin"><span className="text-pink-600">Pending</span> Todos</h1>
            <div>{rendertodos}</div>
        </div>
    )
}

export default Read
