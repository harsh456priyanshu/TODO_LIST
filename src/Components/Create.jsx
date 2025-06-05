import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid'
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const Create = () => {
   const [todos , settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const SubmitHandler = (data) => {
  data.isCompleted = false;
  data.id = nanoid();

  const copytodos = [...todos];
  copytodos.push(data);
  settodos(copytodos);

  toast.success("Todo created!");

  reset();
}


return (
  <div className=" text-white  w-[60%] p-10 ">
    <h1 className="text-5xl mb-10 font-thin">Set <span className="text-red-500">Reminders</span> for <br /> Tasks</h1>
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        {...register("title", {
          required: "Title can not be Empty",
        })}
        className=' p-2 border-b  w-full text-2xl font-thin outline-0'
        type="text"
        placeholder="title"
      />

      <small className="font-thin text-red-400">Add comment More actions
        {errors?.title?.message}
      </small>

      <br />
      <br />
      <button className='text-xl mt-5 px-10 py-2 border rounded'>Create Todo</button>
    </form>
  </div>
)
}

export default Create
