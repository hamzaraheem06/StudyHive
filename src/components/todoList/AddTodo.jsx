import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { Button } from "../index";
import Input from "./Input";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="py-2 w-4/5 flex gap-1 items-center"
    >
      <Input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <Button
        btnType="btn-primary"
        type="submit"
        text="Add"
        icon={<i className="bx bx-plus"></i>}
        className=" font-medium text-white"
      />
    </form>
  );
}

export default AddTodo;
